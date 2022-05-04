<div align="center">
  <img width="200" height="auto" src="logo.svg">
  <br>
  <b>Part of the Sherlock Pattern Initiative</b>
  <br>
  <a>https://github.com/balena-io-playground/sherlock-pattern-initiative</a>
</div>

# Skeleton Project

This is a skeleton template for a TypeScript library project, containing all the default files and settings required for a balena project.
As a result package-lock files are disabled so that upstream dependency issues are surfaces on our CI.
In case that you are implementing a standalone project, you can enable them by deleting the `.npmrc`.

Modify the `package.json`, and README.md file as required, `npm install`, then implement code in the `lib` directory.

Compiled code will be output into the `build` directory (transpiled JS, declaration files and source maps).

`npm test` will run the tests on both node and a browser.
In case that you are implementing a node only library, you can just just drop karma.conf.js and all karma related references in the package.json.

## Integrating with balenaCI

After cloning & scaffolding the repository

- Push the scaffolded project to `master`
- Create a new branch and open a PR for it.
- After balenaCI picks up the PR, go to the repository's settings page and add a
  `master` branch protection rule and mark the balenaCI checks as required.

# Parser

## Using Jellyscript

`@balena/jellyfish- Each pattern has a list of matchers that are run over an input. This input is a single string feed into the parser. The matcher file per pattern needs to follow the JSONSchema. `@balena/jellyfish-types`

# input folder

In the input folder two subfolders are expected: `diagnostics` and `symptoms`:
`symptoms`: Contains all symptom files in JsonSchema format to be feed into Jellyscript parser
`diagnostics`: Contains all structured files that should be evaluated wiht the jellyscript parser

# output folder

In the output folder there will be result files for each diagnostics file feed as input.
