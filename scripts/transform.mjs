/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable import/no-extraneous-dependencies */

import { promises as fs } from 'fs';
import { spawnSync } from 'child_process';
import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher(prop) {
    return ['sizing', 'spacing', 'borderRadius', 'borderWidth', 'x', 'y', 'blur', 'spread'].includes(prop.type) && !prop.name.includes('multiplier');
  },
  transformer(prop) {
    return `${parseFloat(prop.original.value)}px`;
  },
});

StyleDictionary.registerTransform({
  name: 'asset/stringify',
  type: 'value',
  matcher(prop) {
    return ['asset'].includes(prop.type);
  },
  transformer(prop) {
    return `"${prop.original.value.toString()}"`;
  },
});

StyleDictionary.registerTransform({
  name: 'sizes/rem',
  type: 'value',
  matcher(prop) {
    return ['fontSizes'].includes(prop.type) && !prop.name.includes('mobile') && !prop.name.includes('desktop');
  },
  transformer(prop) {
    return `${parseFloat(prop.original.value) * 0.0625}rem`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'tokens-json',
  transforms: ['asset/stringify', 'attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'sizes/px', 'sizes/rem', 'color/css'],
});

function getStyleDictionaryConfig(theme, files) {
  return {
    source: files,
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `dist/${theme}/`,
        prefix: 'sds',
        files: [{
          destination: `theme.css`,
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: (token) => (typeof token.value !== 'object'),
        }],
        transforms: ['asset/stringify', 'attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'sizes/px', 'sizes/rem', 'color/css'],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: `dist/${theme}/`,
        prefix: 'sds',
        files: [{
          destination: 'theme.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        }],
        transforms: ['asset/stringify', 'attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'sizes/px', 'sizes/rem', 'color/css'],
      },
      'web/js': {
        transformGroup: 'tokens-json',
        buildPath: `dist/${theme}/`,
        prefix: 'token',
        files: [
          {
            destination: `theme.json`,
            format: 'json/nested',
          },
        ],
      },
    },
  };
}

async function transformTokens() {
  const tokenThemesBuffer = await fs.readFile('./tokens/$themes.json');
  const themesJson = JSON.parse(tokenThemesBuffer.toString());

  themesJson.forEach(async (theme) => {
    const sourceSets = [];
    const { name: themeName } = theme;
    const sets = Object.keys(theme.selectedTokenSets).filter((set) => {
      const type = theme.selectedTokenSets[set];
      if (type === 'disabled') {
        return false;
      }

      if (type === 'source') {
        sourceSets.push(set);
      }

      return true;
    });

    const transformerArgs = ['token-transformer', '--throwErrorWhenNotResolved', '--expandTypography=false', '--expandShadow=true', 'tokens', `./tokens/${theme.name}.json`, sets.join(','), sourceSets.join(',')];
	console.log( [ 'npx', ...transformerArgs ].join( ' ' ) );

    const transformResult = spawnSync('npx', transformerArgs);
    if ( transformResult.status > 0 ) {
        console.error('Error: Unable to transform figma tokens');
	} 

    try {
        const themeSDTokensPath = `./tokens/${themeName}.json`;

        // Verify theme exists
        await fs.access(themeSDTokensPath);

        // Convert tokens to variable files
        const sd = StyleDictionary.extend(getStyleDictionaryConfig(themeName, [themeSDTokensPath]));
        sd.buildAllPlatforms();

        // Cleanup build
        fs.unlink(`./tokens/${themeName}.json`);
    }catch(err){
        console.log(`No tokens for ${themeName}`)
    }

  });
}

transformTokens();
