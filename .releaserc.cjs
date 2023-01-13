module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
    }],
    "@semantic-release/npm",
    ["@semantic-release/git", {
      "assets": ["package.json", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    ["@semantic-release/github", {
      "assets": [
        { "path": "styles/system/system.css", "label": "SDS Stylesheet", "name": "system.css" },
        { "path": "brands/EECOL/theme.css", "label": "EECOL Theme (CSS)", "name": "eecol.css" },
        { "path": "brands/EECOL/theme.scss", "label": "EECOL Theme (SCSS)", "name": "eecol.scss" },
      ]
    }]
  ],
  branches: ['main'],
};
