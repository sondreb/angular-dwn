# dwn-ui

This repo demonstrates that importing `dwn-sdk-js` currently fails with compilation error:

```
./node_modules/@tbd54566975/dwn-sdk-js/dist/esm/src/validation/json-schemas/index.js - Error: Module build failed (from ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js):
SyntaxError: C:\src\github\sondreb\angular-dwn\node_modules\@tbd54566975\dwn-sdk-js\dist\esm\src\validation\json-schemas\index.js: Support for the experimental syntax 'importAssertions' isn't currently enabled (1:69):

> 1 | import CollectionsQuery from './collections/collections-query.json' assert { type: 'json' };
    |                                                                     ^
  2 | import CollectionsWrite from './collections/collections-write.json' assert { type: 'json' };
  3 | import Definitions from './definitions.json' assert { type: 'json' };
  4 | import GeneralJws from './general-jws.json' assert { type: 'json' };

Add @babel/plugin-syntax-import-assertions (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions) to the 'plugins' section of your Babel config to enable parsing.
```

The purpose of the repo is to investigate potential solution to the importing errors.

## Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
