# Spa Angular Editable Components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

This project provides the Angular components to get you started with integrating with the AEM Site Editor.
The library code is the one in `projects/cq-angular-editable-components`

For now there is no sample application in this repo, so please refer to the official WeRetail Journal for the sample application.
## Code scaffolding

In order to run this you need to have the node version required by Angular 6( Node version 8.9 and greater. )
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build the library

Run `ng build cq-angular-editable-components` to build the library. The build artifacts will be stored in the `dist/cq-angular-editable-components` directory. Use the `--prod` flag for a production build.

## Publishing the library

Our process requires that every publish is based on a released version.  
Therefore the first step is to release the package.  
### Releasing the package
Because our goal was to keep in sync the version of the app package.json and the library package.json we have created a `version` script that will take care of running `npm version` on both the library and the application.

Example:
```
node version.js 0.0.1
```

This command will run `npm --no-git-tag-version version 0.0.1` in the library folder and then it will run
`npm version 0.0.1 -f` in the application folder.  
The `-f` option is needed because the first npm version will force the git environment to be dirty.

### Publishing
In order to publish you will need to go to the library folder and run `npm publish` after releasing the package.

## Running unit tests

Run `ng test cq-angular-editable-components` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e cq-angular-editable-components` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
