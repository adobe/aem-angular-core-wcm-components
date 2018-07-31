# Table of contents

  * [API](#api)
  * [Documentation](#documentation)
  * [Changelog](#changelog)


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

## API

### Classes

<a id="aemcomponentdirective.md"></a>

## Class: AEMComponentDirective

### Hierarchy

**AEMComponentDirective**

### Index

#### Constructors

* [constructor](#aemcomponentdirective.md_constructor)

#### Properties

* [aemComponent](#aemcomponentdirective.md_aemcomponent)
* [cqModel](#aemcomponentdirective.md_cqmodel)
* [modelName](#aemcomponentdirective.md_modelname)
* [pagePath](#aemcomponentdirective.md_pagepath)
* [path](#aemcomponentdirective.md_path)

#### Accessors

* [columnClasses](#aemcomponentdirective.md_columnclasses)
* [type](#aemcomponentdirective.md_type)

#### Methods

* [ngOnDestroy](#aemcomponentdirective.md_ngondestroy)
* [ngOnInit](#aemcomponentdirective.md_ngoninit)

---

### Constructors

<a id="aemcomponentdirective.md_constructor"></a>

####  constructor

⊕ **new AEMComponentDirective**(renderer: *`Renderer2`*, viewContainer: *`ViewContainerRef`*, factoryResolver: *`ComponentFactoryResolver`*, ngZone: *`NgZone`*): [AEMComponentDirective](#aemcomponentdirective.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| renderer | `Renderer2` |
| viewContainer | `ViewContainerRef` |
| factoryResolver | `ComponentFactoryResolver` |
| ngZone | `NgZone` |

**Returns:** [AEMComponentDirective](#aemcomponentdirective.md)

___

### Properties

<a id="aemcomponentdirective.md_aemcomponent"></a>

####  aemComponent

**● aemComponent**: *`any`*

___
<a id="aemcomponentdirective.md_cqmodel"></a>

####  cqModel

**● cqModel**: *`any`*

___
<a id="aemcomponentdirective.md_modelname"></a>

####  modelName

**● modelName**: *`string`*

___
<a id="aemcomponentdirective.md_pagepath"></a>

####  pagePath

**● pagePath**: *`string`*

___
<a id="aemcomponentdirective.md_path"></a>

####  path

**● path**: *`string`*

___

### Accessors

<a id="aemcomponentdirective.md_columnclasses"></a>

####  columnClasses

getcolumnClasses(): `any`

Returns the column classes of the cqModel

**Returns:** `any`

___
<a id="aemcomponentdirective.md_type"></a>

####  type

gettype(): `any`

Returns the type of the cqModel if exists.

**Returns:** `any`

___

### Methods

<a id="aemcomponentdirective.md_ngondestroy"></a>

####  ngOnDestroy

▸ **ngOnDestroy**(): `void`

**Returns:** `void`

___
<a id="aemcomponentdirective.md_ngoninit"></a>

####  ngOnInit

▸ **ngOnInit**(): `void`

**Returns:** `void`

___


<a id="aemcontainercomponent.md"></a>

## Class: AEMContainerComponent

### Hierarchy

**AEMContainerComponent**

↳  [AEMResponsiveGridComponent](#aemresponsivegridcomponent.md)

### Index

#### Constructors

* [constructor](#aemcontainercomponent.md_constructor)

#### Properties

* [items](#aemcontainercomponent.md_items)
* [itemsOrder](#aemcontainercomponent.md_itemsorder)
* [modelName](#aemcontainercomponent.md_modelname)
* [pagePath](#aemcontainercomponent.md_pagepath)
* [path](#aemcontainercomponent.md_path)

#### Methods

* [getDataPath](#aemcontainercomponent.md_getdatapath)
* [getItem](#aemcontainercomponent.md_getitem)

---

### Constructors

<a id="aemcontainercomponent.md_constructor"></a>

####  constructor

⊕ **new AEMContainerComponent**(): [AEMContainerComponent](#aemcontainercomponent.md)

**Returns:** [AEMContainerComponent](#aemcontainercomponent.md)

___

### Properties

<a id="aemcontainercomponent.md_items"></a>

####  items

**● items**: *`any`*

___
<a id="aemcontainercomponent.md_itemsorder"></a>

####  itemsOrder

**● itemsOrder**: *`any`*

___
<a id="aemcontainercomponent.md_modelname"></a>

####  modelName

**● modelName**: *`string`* = ""

___
<a id="aemcontainercomponent.md_pagepath"></a>

####  pagePath

**● pagePath**: *`string`* = ""

___
<a id="aemcontainercomponent.md_path"></a>

####  path

**● path**: *`string`* = ""

___

### Methods

<a id="aemcontainercomponent.md_getdatapath"></a>

####  getDataPath

▸ **getDataPath**(path: *`any`*): `any`

Returns the aggregated path of this container path and the provided path

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `any` |  the provided path to aggregate with the container path |

**Returns:** `any`

___
<a id="aemcontainercomponent.md_getitem"></a>

####  getItem

▸ **getItem**(itemKey: *`any`*): `any`

Returns the item data from the cqModel

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemKey | `any` |  the itemKey to look for in the items. |

**Returns:** `any`

___


<a id="aemresponsivegridcomponent.md"></a>

## Class: AEMResponsiveGridComponent

### Hierarchy

 [AEMContainerComponent](#aemcontainercomponent.md)

**↳ AEMResponsiveGridComponent**

### Index

#### Constructors

* [constructor](#aemresponsivegridcomponent.md_constructor)

#### Properties

* [classNames](#aemresponsivegridcomponent.md_classnames)
* [columnClassNames](#aemresponsivegridcomponent.md_columnclassnames)
* [columnCount](#aemresponsivegridcomponent.md_columncount)
* [gridClassNames](#aemresponsivegridcomponent.md_gridclassnames)
* [items](#aemresponsivegridcomponent.md_items)
* [itemsOrder](#aemresponsivegridcomponent.md_itemsorder)
* [modelName](#aemresponsivegridcomponent.md_modelname)
* [pagePath](#aemresponsivegridcomponent.md_pagepath)
* [path](#aemresponsivegridcomponent.md_path)

#### Accessors

* [hostClasses](#aemresponsivegridcomponent.md_hostclasses)
* [isInEditMode](#aemresponsivegridcomponent.md_isineditmode)
* [placeholdePath](#aemresponsivegridcomponent.md_placeholdepath)
* [placeholderClass](#aemresponsivegridcomponent.md_placeholderclass)

#### Methods

* [getDataPath](#aemresponsivegridcomponent.md_getdatapath)
* [getItem](#aemresponsivegridcomponent.md_getitem)

---

### Constructors

<a id="aemresponsivegridcomponent.md_constructor"></a>

####  constructor

⊕ **new AEMResponsiveGridComponent**(): [AEMResponsiveGridComponent](#aemresponsivegridcomponent.md)

**Returns:** [AEMResponsiveGridComponent](#aemresponsivegridcomponent.md)

___

### Properties

<a id="aemresponsivegridcomponent.md_classnames"></a>

####  classNames

**● classNames**: *`string`*

___
<a id="aemresponsivegridcomponent.md_columnclassnames"></a>

####  columnClassNames

**● columnClassNames**: *`string`*

___
<a id="aemresponsivegridcomponent.md_columncount"></a>

####  columnCount

**● columnCount**: *`number`*

___
<a id="aemresponsivegridcomponent.md_gridclassnames"></a>

####  gridClassNames

**● gridClassNames**: *`string`*

___
<a id="aemresponsivegridcomponent.md_items"></a>

####  items

**● items**: *`any`*

___
<a id="aemresponsivegridcomponent.md_itemsorder"></a>

####  itemsOrder

**● itemsOrder**: *`any`*

___
<a id="aemresponsivegridcomponent.md_modelname"></a>

####  modelName

**● modelName**: *`string`* = ""

___
<a id="aemresponsivegridcomponent.md_pagepath"></a>

####  pagePath

**● pagePath**: *`string`* = ""

___
<a id="aemresponsivegridcomponent.md_path"></a>

####  path

**● path**: *`string`* = ""

___

### Accessors

<a id="aemresponsivegridcomponent.md_hostclasses"></a>

####  hostClasses

gethostClasses(): `string`

Returns the class names of the responsive grid based on the data from the cqModel

**Returns:** `string`

___
<a id="aemresponsivegridcomponent.md_isineditmode"></a>

####  isInEditMode

getisInEditMode(): `boolean`

Returns weather of not we are in the editor

**Returns:** `boolean`

___
<a id="aemresponsivegridcomponent.md_placeholdepath"></a>

####  placeholdePath

getplaceholdePath(): `string`

Returns the placeholder path

**Returns:** `string`

___
<a id="aemresponsivegridcomponent.md_placeholderclass"></a>

####  placeholderClass

getplaceholderClass(): `string`

Returns the placeholder classes

**Returns:** `string`

___

### Methods

<a id="aemresponsivegridcomponent.md_getdatapath"></a>

####  getDataPath

▸ **getDataPath**(path: *`any`*): `any`

Returns the aggregated path of this container path and the provided path

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `any` |  the provided path to aggregate with the container path |

**Returns:** `any`

___
<a id="aemresponsivegridcomponent.md_getitem"></a>

####  getItem

▸ **getItem**(itemKey: *`any`*): `any`

Returns the item data from the cqModel

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemKey | `any` |  the itemKey to look for in the items. |

**Returns:** `any`

___


<a id="componentmappingwithconfig.md"></a>

## Class: ComponentMappingWithConfig

### Hierarchy

**ComponentMappingWithConfig**

### Index

#### Constructors

* [constructor](#componentmappingwithconfig.md_constructor)

#### Methods

* [get](#componentmappingwithconfig.md_get)
* [getEditConfig](#componentmappingwithconfig.md_geteditconfig)
* [map](#componentmappingwithconfig.md_map)

---

### Constructors

<a id="componentmappingwithconfig.md_constructor"></a>

####  constructor

⊕ **new ComponentMappingWithConfig**(spaMapping: *`SPAComponentMapping`*): [ComponentMappingWithConfig](#componentmappingwithconfig.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| spaMapping | `SPAComponentMapping` |

**Returns:** [ComponentMappingWithConfig](#componentmappingwithconfig.md)

___

### Methods

<a id="componentmappingwithconfig.md_get"></a>

####  get

▸ **get**(resourceType: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| resourceType | `any` |

**Returns:** `any`

___
<a id="componentmappingwithconfig.md_geteditconfig"></a>

####  getEditConfig

▸ **getEditConfig**(type: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `any` |

**Returns:** `any`

___
<a id="componentmappingwithconfig.md_map"></a>

####  map

▸ **map**(resourceTypes: *`any`*, clazz: *`any`*, editConfig?: *`any`*): `void`

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| resourceTypes | `any` | - |
| clazz | `any` | - |
| `Default value` editConfig | `any` |  null |

**Returns:** `void`

___



### Object literals

* [Constants](#constants)
* [Utils](#utils)

---

## Object literals

<a id="constants"></a>

### `<Const>` Constants

**Constants**: *`object`*

<a id="constants.children_prop"></a>

####  CHILDREN_PROP

**● CHILDREN_PROP**: *`any`* =  PMConstants.CHILDREN_PROP

Children of an item

___
<a id="constants.data_path_prop"></a>

####  DATA_PATH_PROP

**● DATA_PATH_PROP**: *`string`* = ":dataPath"

Path of the resource in the model

___
<a id="constants.hierarchy_type_prop"></a>

####  HIERARCHY_TYPE_PROP

**● HIERARCHY_TYPE_PROP**: *`string`* = ":hierarchyType"

Hierarchical type of the item

___
<a id="constants.items_order_prop"></a>

####  ITEMS_ORDER_PROP

**● ITEMS_ORDER_PROP**: *`any`* =  PMConstants.ITEMS_ORDER_PROP

Order in which the items should be listed

___
<a id="constants.items_prop"></a>

####  ITEMS_PROP

**● ITEMS_PROP**: *`any`* =  PMConstants.ITEMS_PROP

List of child items of an item

___
<a id="constants.new_section_class_names"></a>

####  NEW_SECTION_CLASS_NAMES

**● NEW_SECTION_CLASS_NAMES**: *`string`* = "new section"

Class names associated with a new section component

___
<a id="constants.path_prop"></a>

####  PATH_PROP

**● PATH_PROP**: *`any`* =  PMConstants.PATH_PROP

Path of the item

___
<a id="constants.type_prop"></a>

####  TYPE_PROP

**● TYPE_PROP**: *`any`* =  PMConstants.TYPE_PROP

___

___
<a id="utils"></a>

### `<Const>` Utils

**Utils**: *`object`*

Helper functions for interacting with the AEM environment

<a id="utils.isineditor"></a>

####  isInEditor

▸ **isInEditor**(): `boolean`

Is the app used in the context of the AEM Page editor

**Returns:** `boolean`

___

___



## Documentation 

The [technical documentation](https://www.adobe.com/go/aem6_4_docs_spa_en) is already available, but if you are unable to solve your problem or you found a bug you can always [contact us](https://www.adobe.com/go/aem6_4_support_en) and ask for help!

## Changelog 

### 0.0.7-beta.2 - 1 August 2018

* Server-side rendering preparation, fixi
### 0.0.7-beta.1 - 27 July 2018

* **BREAKING CHANGE** Properties are no longer bundled in cqModel, we inject all properties directly on the components
  * Implications, all components should now remove cqModel property and use directly the api properties that they want to consume.

