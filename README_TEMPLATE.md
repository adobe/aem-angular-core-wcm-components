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
In order to publish you will need to build the library:
```
ng build cq-angular-editable-components
```
And then publish the built artifacts
```
cd dist/cq-angular-editable-components
npm publish
```

We have also added a npm script that can run the above commands together:
```
npm run publish-lib
```

Please not that any argument added to this script will go to the last command.  In this case the last command is `npm publish`.  
Therefore you can add all the arguments `npm publish` takes to `npm run publish-lib`.  
Example, publishing a public package:
```
npm run publish-lib -- --private=false
```

## Running unit tests

Run `ng test cq-angular-editable-components` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e cq-angular-editable-components` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). 

## API !heading

#include "DOCUMENTATION.md"

## Documentation !heading 

The [technical documentation](https://www.adobe.com/go/aem6_4_docs_spa_en) is already available, but if you are unable to solve your problem or you found a bug you can always [contact us](https://www.adobe.com/go/aem6_4_support_en) and ask for help!

## Changelog !heading 

#include "CHANGELOG.md"
