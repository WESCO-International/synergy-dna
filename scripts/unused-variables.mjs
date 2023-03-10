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

/* eslint-disable import/no-extraneous-dependencies, no-restricted-syntax */
/* eslint-disable no-await-in-loop, no-loop-func, no-console */

import { promises as fs } from 'fs';

const tokenThemesBuffer = await fs.readFile('./tokens/$themes.json');
const themesJson = JSON.parse(tokenThemesBuffer.toString());

const systemCSS = await fs.readFile('./dist/system.css');

const excludes = ['--sds-theme', '--sds-semantic-drop-shadow', '--sds-semantic-spacing-gap-component', '--sds-semantic-spacing-around-component', '--sds-semantic-border-width', '--sds-semantic-size-icon', '--sds-semantic-size-breakpoints-screen', '--sds-pattern', '--sds-semantic-inner-shadow'];

for (const theme of themesJson) {
  const themeVariableFile = await fs.readFile(`./dist/${theme.name}/theme.css`);
  const themeVariables = themeVariableFile.toString();

  const regex = /(--)[^\,\:\)]+/g;
  const matches = themeVariables.match(regex);

  if (matches) {
    const variables = matches.map((match) => match.replace(/:.*/, '').trim())
      .filter((variable) => !excludes.some((subString) => variable.includes(subString)));

    console.log(`\nFinding unused variables for theme ${theme.name}...`);
    variables.forEach((variable) => {
      if (!systemCSS.includes(variable)) {
        console.log('Unused variable', variable);
      }
    });
  }
}
