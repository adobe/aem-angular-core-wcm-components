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

<a id="aemallowedcomponentscontainercomponent.md"></a>

## Class: AEMAllowedComponentsContainerComponent

### Hierarchy

* [AEMContainerComponent](#aemcontainercomponent.md)

  ↳ **AEMAllowedComponentsContainerComponent**

  ↳ [AEMResponsiveGridComponent](#aemresponsivegridcomponent.md)

### Index

#### Properties

* [allowedComponents](#aemallowedcomponentscontainercomponent.md_allowedcomponents)
* [classNames](#aemallowedcomponentscontainercomponent.md_classnames)
* [cqItems](#aemallowedcomponentscontainercomponent.md_cqitems)
* [cqItemsOrder](#aemallowedcomponentscontainercomponent.md_cqitemsorder)
* [cqPath](#aemallowedcomponentscontainercomponent.md_cqpath)
* [emptyLabel](#aemallowedcomponentscontainercomponent.md_emptylabel)
* [modelName](#aemallowedcomponentscontainercomponent.md_modelname)
* [title](#aemallowedcomponentscontainercomponent.md_title)

#### Accessors

* [allowedComponentClassNames](#aemallowedcomponentscontainercomponent.md_allowedcomponentclassnames)
* [allowedComponentListTitleClassNames](#aemallowedcomponentscontainercomponent.md_allowedcomponentlisttitleclassnames)
* [hostClasses](#aemallowedcomponentscontainercomponent.md_hostclasses)
* [isInEditMode](#aemallowedcomponentscontainercomponent.md_isineditmode)
* [placeholderPath](#aemallowedcomponentscontainercomponent.md_placeholderpath)

#### Methods

* [getAllowedComponentListLabel](#aemallowedcomponentscontainercomponent.md_getallowedcomponentlistlabel)
* [getAllowedComponentListPlaceholderClassNames](#aemallowedcomponentscontainercomponent.md_getallowedcomponentlistplaceholderclassnames)
* [getAllowedComponents](#aemallowedcomponentscontainercomponent.md_getallowedcomponents)
* [getDataPath](#aemallowedcomponentscontainercomponent.md_getdatapath)
* [getHostClassNames](#aemallowedcomponentscontainercomponent.md_gethostclassnames)
* [getItem](#aemallowedcomponentscontainercomponent.md_getitem)
* [getPlaceholderClassNames](#aemallowedcomponentscontainercomponent.md_getplaceholderclassnames)
* [isAllowedComponentsApplicable](#aemallowedcomponentscontainercomponent.md_isallowedcomponentsapplicable)

### Properties

####  allowedComponents

• **allowedComponents**: *object*

##### Type declaration:

* **applicable**: *boolean*

* **components**: *any*

___

####  classNames

• **classNames**: *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[classNames](#aemcontainercomponent.md#classnames)*

Class names of the current component

___

####  cqItems

• **cqItems**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItems](#aemcontainercomponent.md#cqitems)*

Map of model items included in the current container

___

####  cqItemsOrder

• **cqItemsOrder**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItemsOrder](#aemcontainercomponent.md#cqitemsorder)*

Array of model item keys

___

####  cqPath

• **cqPath**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqPath](#aemcontainercomponent.md#cqpath)*

Path to the model associated with the current instance of the component

___

####  emptyLabel

• **emptyLabel**: *string* = "No allowed components"

___

####  modelName

• **modelName**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[modelName](#aemcontainercomponent.md#modelname)*

Key of the model structure

___

####  title

• **title**: *string*

### Accessors

####  allowedComponentClassNames

• **get allowedComponentClassNames**(): *string*

**Returns:** *string*

___

####  allowedComponentListTitleClassNames

• **get allowedComponentListTitleClassNames**(): *string*

**Returns:** *string*

___

####  hostClasses

• **get hostClasses**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[hostClasses](#aemcontainercomponent.md#hostclasses)*

**Returns:** *string*

___

####  isInEditMode

• **get isInEditMode**(): *boolean*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[isInEditMode](#aemcontainercomponent.md#isineditmode)*

Returns weather of not we are in the editor

**Returns:** *boolean*

___

####  placeholderPath

• **get placeholderPath**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[placeholderPath](#aemcontainercomponent.md#placeholderpath)*

Returns the placeholder path

**Returns:** *string*

### Methods

####  getAllowedComponentListLabel

▸ **getAllowedComponentListLabel**(): *string*

**Returns:** *string*

___

####  getAllowedComponentListPlaceholderClassNames

▸ **getAllowedComponentListPlaceholderClassNames**(): *string*

**Returns:** *string*

___

####  getAllowedComponents

▸ **getAllowedComponents**(): *any*

**Returns:** *any*

___

####  getDataPath

▸ **getDataPath**(`path`: any): *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getDataPath](#aemcontainercomponent.md#getdatapath)*

Returns the aggregated path of this container path and the provided path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | the provided path to aggregate with the container path  |

**Returns:** *any*

___

####  getHostClassNames

▸ **getHostClassNames**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getHostClassNames](#aemcontainercomponent.md#gethostclassnames)*

Returns the class names of the container based on the data from the cqModel

**Returns:** *string*

___

####  getItem

▸ **getItem**(`itemKey`: any): *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getItem](#aemcontainercomponent.md#getitem)*

Returns the item data from the cqModel

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itemKey` | any | the itemKey to look for in the items.  |

**Returns:** *any*

___

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getPlaceholderClassNames](#aemcontainercomponent.md#getplaceholderclassnames)*

Returns the placeholder classes

**Returns:** *string*

___

####  isAllowedComponentsApplicable

▸ **isAllowedComponentsApplicable**(): *boolean*

**Returns:** *boolean*

<a id="aemcomponentdirective.md"></a>

## Class: AEMComponentDirective

### Hierarchy

* **AEMComponentDirective**

### Implements

* AfterViewInit
* OnInit
* OnDestroy
* OnChanges

### Index

#### Constructors

* [constructor](#aemcomponentdirective.md_constructor)

#### Properties

* [aemComponent](#aemcomponentdirective.md_aemcomponent)
* [cqPath](#aemcomponentdirective.md_cqpath)
* [itemAttrs](#aemcomponentdirective.md_itemattrs)
* [itemName](#aemcomponentdirective.md_itemname)

#### Accessors

* [changeDetectorRef](#aemcomponentdirective.md_changedetectorref)
* [cqItem](#aemcomponentdirective.md_cqitem)
* [type](#aemcomponentdirective.md_type)

#### Methods

* [ngAfterViewInit](#aemcomponentdirective.md_ngafterviewinit)
* [ngOnChanges](#aemcomponentdirective.md_ngonchanges)
* [ngOnDestroy](#aemcomponentdirective.md_ngondestroy)
* [ngOnInit](#aemcomponentdirective.md_ngoninit)

### Constructors

####  constructor

\+ **new AEMComponentDirective**(`renderer`: Renderer2, `viewContainer`: ViewContainerRef, `factoryResolver`: ComponentFactoryResolver, `_changeDetectorRef`: ChangeDetectorRef): *[AEMComponentDirective](#aemcomponentdirective.md)*

**Parameters:**

Name | Type |
------ | ------ |
`renderer` | Renderer2 |
`viewContainer` | ViewContainerRef |
`factoryResolver` | ComponentFactoryResolver |
`_changeDetectorRef` | ChangeDetectorRef |

**Returns:** *[AEMComponentDirective](#aemcomponentdirective.md)*

### Properties

####  aemComponent

• **aemComponent**: *any*

___

####  cqPath

• **cqPath**: *string*

Path to the model structure associated with the current component

___

####  itemAttrs

• **itemAttrs**: *object*

HtmlElement attributes for the current instance of the component

___

####  itemName

• **itemName**: *string*

Name of the current instance of the component

### Accessors

####  changeDetectorRef

• **get changeDetectorRef**(): *ChangeDetectorRef*

**Returns:** *ChangeDetectorRef*

___

####  cqItem

• **get cqItem**(): *object*

**Returns:** *object*

• **set cqItem**(`value`: object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | object |

**Returns:** *void*

___

####  type

• **get type**(): *any*

Returns the type of the cqItem if exists.

**Returns:** *any*

### Methods

####  ngAfterViewInit

▸ **ngAfterViewInit**(): *void*

**Returns:** *void*

___

####  ngOnChanges

▸ **ngOnChanges**(`changes`: SimpleChanges): *void*

**Parameters:**

Name | Type |
------ | ------ |
`changes` | SimpleChanges |

**Returns:** *void*

___

####  ngOnDestroy

▸ **ngOnDestroy**(): *void*

**Returns:** *void*

___

####  ngOnInit

▸ **ngOnInit**(): *void*

**Returns:** *void*

<a id="aemcontainercomponent.md"></a>

## Class: AEMContainerComponent

### Hierarchy

* **AEMContainerComponent**

  ↳ [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md)

  ↳ [AEMPageComponent](#aempagecomponent.md)

### Index

#### Properties

* [classNames](#aemcontainercomponent.md_classnames)
* [cqItems](#aemcontainercomponent.md_cqitems)
* [cqItemsOrder](#aemcontainercomponent.md_cqitemsorder)
* [cqPath](#aemcontainercomponent.md_cqpath)
* [modelName](#aemcontainercomponent.md_modelname)

#### Accessors

* [hostClasses](#aemcontainercomponent.md_hostclasses)
* [isInEditMode](#aemcontainercomponent.md_isineditmode)
* [placeholderPath](#aemcontainercomponent.md_placeholderpath)

#### Methods

* [getDataPath](#aemcontainercomponent.md_getdatapath)
* [getHostClassNames](#aemcontainercomponent.md_gethostclassnames)
* [getItem](#aemcontainercomponent.md_getitem)
* [getPlaceholderClassNames](#aemcontainercomponent.md_getplaceholderclassnames)

### Properties

####  classNames

• **classNames**: *string*

Class names of the current component

___

####  cqItems

• **cqItems**: *any*

Map of model items included in the current container

___

####  cqItemsOrder

• **cqItemsOrder**: *any*

Array of model item keys

___

####  cqPath

• **cqPath**: *string* = ""

Path to the model associated with the current instance of the component

___

####  modelName

• **modelName**: *string* = ""

Key of the model structure

### Accessors

####  hostClasses

• **get hostClasses**(): *string*

**Returns:** *string*

___

####  isInEditMode

• **get isInEditMode**(): *boolean*

Returns weather of not we are in the editor

**Returns:** *boolean*

___

####  placeholderPath

• **get placeholderPath**(): *string*

Returns the placeholder path

**Returns:** *string*

### Methods

####  getDataPath

▸ **getDataPath**(`path`: any): *any*

Returns the aggregated path of this container path and the provided path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | the provided path to aggregate with the container path  |

**Returns:** *any*

___

####  getHostClassNames

▸ **getHostClassNames**(): *string*

Returns the class names of the container based on the data from the cqModel

**Returns:** *string*

___

####  getItem

▸ **getItem**(`itemKey`: any): *any*

Returns the item data from the cqModel

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itemKey` | any | the itemKey to look for in the items.  |

**Returns:** *any*

___

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): *string*

Returns the placeholder classes

**Returns:** *string*

<a id="aemdirectivetestcomponent.md"></a>

## Class: AEMDirectiveTestComponent

### Hierarchy

* **AEMDirectiveTestComponent**

### Index

#### Properties

* [data](#aemdirectivetestcomponent.md_data)

### Properties

####  data

• **data**: *any*

<a id="aemmodelprovidercomponent.md"></a>

## Class: AEMModelProviderComponent

### Hierarchy

* **AEMModelProviderComponent**

### Index

#### Constructors

* [constructor](#aemmodelprovidercomponent.md_constructor)

#### Properties

* [aemComponent](#aemmodelprovidercomponent.md_aemcomponent)
* [aemModelProvider](#aemmodelprovidercomponent.md_aemmodelprovider)
* [cqItem](#aemmodelprovidercomponent.md_cqitem)
* [cqPath](#aemmodelprovidercomponent.md_cqpath)
* [itemName](#aemmodelprovidercomponent.md_itemname)

#### Methods

* [ngDestroy](#aemmodelprovidercomponent.md_ngdestroy)
* [ngOnInit](#aemmodelprovidercomponent.md_ngoninit)
* [updateItem](#aemmodelprovidercomponent.md_updateitem)

### Constructors

####  constructor

\+ **new AEMModelProviderComponent**(): *[AEMModelProviderComponent](#aemmodelprovidercomponent.md)*

**Returns:** *[AEMModelProviderComponent](#aemmodelprovidercomponent.md)*

### Properties

####  aemComponent

• **aemComponent**: *[AEMComponentDirective](#aemcomponentdirective.md)*

___

####  aemModelProvider

• **aemModelProvider**: *any*

___

####  cqItem

• **cqItem**: *any*

Model item associated with the current model provider component

___

####  cqPath

• **cqPath**: *any*

Path to the model associated with the current instance of the component

___

####  itemName

• **itemName**: *any*

Name of the item associated with the current model provider component

### Methods

####  ngDestroy

▸ **ngDestroy**(): *void*

**Returns:** *void*

___

####  ngOnInit

▸ **ngOnInit**(): *void*

**Returns:** *void*

___

####  updateItem

▸ **updateItem**(): *void*

Updates the item data

**Returns:** *void*

<a id="aempagecomponent.md"></a>

## Class: AEMPageComponent

### Hierarchy

* [AEMContainerComponent](#aemcontainercomponent.md)

  ↳ **AEMPageComponent**

### Index

#### Properties

* [classNames](#aempagecomponent.md_classnames)
* [cqItems](#aempagecomponent.md_cqitems)
* [cqItemsOrder](#aempagecomponent.md_cqitemsorder)
* [cqPath](#aempagecomponent.md_cqpath)
* [modelName](#aempagecomponent.md_modelname)

#### Accessors

* [hostClasses](#aempagecomponent.md_hostclasses)
* [isInEditMode](#aempagecomponent.md_isineditmode)
* [placeholderPath](#aempagecomponent.md_placeholderpath)

#### Methods

* [getDataPath](#aempagecomponent.md_getdatapath)
* [getHostClassNames](#aempagecomponent.md_gethostclassnames)
* [getItem](#aempagecomponent.md_getitem)
* [getPlaceholderClassNames](#aempagecomponent.md_getplaceholderclassnames)

### Properties

####  classNames

• **classNames**: *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[classNames](#aemcontainercomponent.md#classnames)*

Class names of the current component

___

####  cqItems

• **cqItems**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItems](#aemcontainercomponent.md#cqitems)*

Map of model items included in the current container

___

####  cqItemsOrder

• **cqItemsOrder**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItemsOrder](#aemcontainercomponent.md#cqitemsorder)*

Array of model item keys

___

####  cqPath

• **cqPath**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqPath](#aemcontainercomponent.md#cqpath)*

Path to the model associated with the current instance of the component

___

####  modelName

• **modelName**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[modelName](#aemcontainercomponent.md#modelname)*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[modelName](#aemcontainercomponent.md#modelname)*

### Accessors

####  hostClasses

• **get hostClasses**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[hostClasses](#aemcontainercomponent.md#hostclasses)*

**Returns:** *string*

___

####  isInEditMode

• **get isInEditMode**(): *boolean*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[isInEditMode](#aemcontainercomponent.md#isineditmode)*

Returns weather of not we are in the editor

**Returns:** *boolean*

___

####  placeholderPath

• **get placeholderPath**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[placeholderPath](#aemcontainercomponent.md#placeholderpath)*

Returns the placeholder path

**Returns:** *string*

### Methods

####  getDataPath

▸ **getDataPath**(`path`: any): *any*

*Overrides [AEMContainerComponent](#aemcontainercomponent.md).[getDataPath](#aemcontainercomponent.md#getdatapath)*

Returns the aggregated path of this container path and the provided path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | the provided path to aggregate with the container path  |

**Returns:** *any*

___

####  getHostClassNames

▸ **getHostClassNames**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getHostClassNames](#aemcontainercomponent.md#gethostclassnames)*

Returns the class names of the container based on the data from the cqModel

**Returns:** *string*

___

####  getItem

▸ **getItem**(`itemKey`: any): *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getItem](#aemcontainercomponent.md#getitem)*

Returns the item data from the cqModel

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itemKey` | any | the itemKey to look for in the items.  |

**Returns:** *any*

___

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getPlaceholderClassNames](#aemcontainercomponent.md#getplaceholderclassnames)*

Returns the placeholder classes

**Returns:** *string*

<a id="aemresponsivegridcomponent.md"></a>

## Class: AEMResponsiveGridComponent

### Hierarchy

  ↳ [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md)

  ↳ **AEMResponsiveGridComponent**

### Index

#### Properties

* [allowedComponents](#aemresponsivegridcomponent.md_allowedcomponents)
* [classNames](#aemresponsivegridcomponent.md_classnames)
* [columnClassNames](#aemresponsivegridcomponent.md_columnclassnames)
* [columnCount](#aemresponsivegridcomponent.md_columncount)
* [cqItems](#aemresponsivegridcomponent.md_cqitems)
* [cqItemsOrder](#aemresponsivegridcomponent.md_cqitemsorder)
* [cqPath](#aemresponsivegridcomponent.md_cqpath)
* [emptyLabel](#aemresponsivegridcomponent.md_emptylabel)
* [gridClassNames](#aemresponsivegridcomponent.md_gridclassnames)
* [modelName](#aemresponsivegridcomponent.md_modelname)
* [title](#aemresponsivegridcomponent.md_title)

#### Accessors

* [allowedComponentClassNames](#aemresponsivegridcomponent.md_allowedcomponentclassnames)
* [allowedComponentListTitleClassNames](#aemresponsivegridcomponent.md_allowedcomponentlisttitleclassnames)
* [hostClasses](#aemresponsivegridcomponent.md_hostclasses)
* [isInEditMode](#aemresponsivegridcomponent.md_isineditmode)
* [placeholderPath](#aemresponsivegridcomponent.md_placeholderpath)

#### Methods

* [getAllowedComponentListLabel](#aemresponsivegridcomponent.md_getallowedcomponentlistlabel)
* [getAllowedComponentListPlaceholderClassNames](#aemresponsivegridcomponent.md_getallowedcomponentlistplaceholderclassnames)
* [getAllowedComponents](#aemresponsivegridcomponent.md_getallowedcomponents)
* [getAttrDataPath](#aemresponsivegridcomponent.md_getattrdatapath)
* [getColumnClassNames](#aemresponsivegridcomponent.md_getcolumnclassnames)
* [getDataPath](#aemresponsivegridcomponent.md_getdatapath)
* [getHostClassNames](#aemresponsivegridcomponent.md_gethostclassnames)
* [getItem](#aemresponsivegridcomponent.md_getitem)
* [getPlaceholderClassNames](#aemresponsivegridcomponent.md_getplaceholderclassnames)
* [isAllowedComponentsApplicable](#aemresponsivegridcomponent.md_isallowedcomponentsapplicable)

### Properties

####  allowedComponents

• **allowedComponents**: *object*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[allowedComponents](#aemallowedcomponentscontainercomponent.md#allowedcomponents)*

##### Type declaration:

* **applicable**: *boolean*

* **components**: *any*

___

####  classNames

• **classNames**: *string*

*Overrides [AEMContainerComponent](#aemcontainercomponent.md).[classNames](#aemcontainercomponent.md#classnames)*

Class names of the current component

___

####  columnClassNames

• **columnClassNames**: *Object*

Map of class names corresponding to each child of the current responsive grid

___

####  columnCount

• **columnCount**: *number*

Current number of columns of the grid

___

####  cqItems

• **cqItems**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItems](#aemcontainercomponent.md#cqitems)*

Map of model items included in the current container

___

####  cqItemsOrder

• **cqItemsOrder**: *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqItemsOrder](#aemcontainercomponent.md#cqitemsorder)*

Array of model item keys

___

####  cqPath

• **cqPath**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[cqPath](#aemcontainercomponent.md#cqpath)*

Path to the model associated with the current instance of the component

___

####  emptyLabel

• **emptyLabel**: *string* = "No allowed components"

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[emptyLabel](#aemallowedcomponentscontainercomponent.md#emptylabel)*

___

####  gridClassNames

• **gridClassNames**: *string*

Class names associated with the current responsive grid

___

####  modelName

• **modelName**: *string* = ""

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[modelName](#aemcontainercomponent.md#modelname)*

Key of the model structure

___

####  title

• **title**: *string*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[title](#aemallowedcomponentscontainercomponent.md#title)*

### Accessors

####  allowedComponentClassNames

• **get allowedComponentClassNames**(): *string*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[allowedComponentClassNames](#aemallowedcomponentscontainercomponent.md#allowedcomponentclassnames)*

**Returns:** *string*

___

####  allowedComponentListTitleClassNames

• **get allowedComponentListTitleClassNames**(): *string*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[allowedComponentListTitleClassNames](#aemallowedcomponentscontainercomponent.md#allowedcomponentlisttitleclassnames)*

**Returns:** *string*

___

####  hostClasses

• **get hostClasses**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[hostClasses](#aemcontainercomponent.md#hostclasses)*

**Returns:** *string*

___

####  isInEditMode

• **get isInEditMode**(): *boolean*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[isInEditMode](#aemcontainercomponent.md#isineditmode)*

Returns weather of not we are in the editor

**Returns:** *boolean*

___

####  placeholderPath

• **get placeholderPath**(): *string*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[placeholderPath](#aemcontainercomponent.md#placeholderpath)*

Returns the placeholder path

**Returns:** *string*

### Methods

####  getAllowedComponentListLabel

▸ **getAllowedComponentListLabel**(): *string*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[getAllowedComponentListLabel](#aemallowedcomponentscontainercomponent.md#getallowedcomponentlistlabel)*

**Returns:** *string*

___

####  getAllowedComponentListPlaceholderClassNames

▸ **getAllowedComponentListPlaceholderClassNames**(): *string*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[getAllowedComponentListPlaceholderClassNames](#aemallowedcomponentscontainercomponent.md#getallowedcomponentlistplaceholderclassnames)*

**Returns:** *string*

___

####  getAllowedComponents

▸ **getAllowedComponents**(): *any*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[getAllowedComponents](#aemallowedcomponentscontainercomponent.md#getallowedcomponents)*

**Returns:** *any*

___

####  getAttrDataPath

▸ **getAttrDataPath**(`path`: any): *any*

Returns the aggregated path of this container path and the provided path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | the provided path to aggregate with the container path  |

**Returns:** *any*

___

####  getColumnClassNames

▸ **getColumnClassNames**(`itemKey`: string): *any*

Returns the column class names for a given column

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itemKey` | string | The key of the column item  |

**Returns:** *any*

___

####  getDataPath

▸ **getDataPath**(`path`: any): *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getDataPath](#aemcontainercomponent.md#getdatapath)*

Returns the aggregated path of this container path and the provided path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | the provided path to aggregate with the container path  |

**Returns:** *any*

___

####  getHostClassNames

▸ **getHostClassNames**(): *string*

*Overrides [AEMContainerComponent](#aemcontainercomponent.md).[getHostClassNames](#aemcontainercomponent.md#gethostclassnames)*

Returns the class names of the responsive grid based on the data from the cqModel

**Returns:** *string*

___

####  getItem

▸ **getItem**(`itemKey`: any): *any*

*Inherited from [AEMContainerComponent](#aemcontainercomponent.md).[getItem](#aemcontainercomponent.md#getitem)*

Returns the item data from the cqModel

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itemKey` | any | the itemKey to look for in the items.  |

**Returns:** *any*

___

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): *string*

*Overrides [AEMContainerComponent](#aemcontainercomponent.md).[getPlaceholderClassNames](#aemcontainercomponent.md#getplaceholderclassnames)*

Returns the placeholder classes

**Returns:** *string*

___

####  isAllowedComponentsApplicable

▸ **isAllowedComponentsApplicable**(): *boolean*

*Inherited from [AEMAllowedComponentsContainerComponent](#aemallowedcomponentscontainercomponent.md).[isAllowedComponentsApplicable](#aemallowedcomponentscontainercomponent.md#isallowedcomponentsapplicable)*

**Returns:** *boolean*

<a id="aempagedataresolver.md"></a>

## Class: AemPageDataResolver

### Hierarchy

* **AemPageDataResolver**

### Implements

* Resolve‹string›

### Index

#### Constructors

* [constructor](#aempagedataresolver.md_constructor)

#### Methods

* [resolve](#aempagedataresolver.md_resolve)

### Constructors

####  constructor

\+ **new AemPageDataResolver**(): *[AemPageDataResolver](#aempagedataresolver.md)*

**Returns:** *[AemPageDataResolver](#aempagedataresolver.md)*

### Methods

####  resolve

▸ **resolve**(`route`: ActivatedRouteSnapshot): *string*

Returns the absolute resource path without extension.

**`example`** 
// returns: '/content/aa/bb' for route.url [ 'content', 'aa', 'bb.html' ]
resolve(route)

**`example`** 
// returns: '/content/aa/bb' for route.url [ 'content', 'aa', 'bb.html' ]
resolve(route)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`route` | ActivatedRouteSnapshot | route |

**Returns:** *string*

absolute resource path without extension

<a id="aempageroutereusestrategy.md"></a>

## Class: AemPageRouteReuseStrategy

Implements RouteReuseStrategy to customize route reuse.

### Hierarchy

* **AemPageRouteReuseStrategy**

### Implements

* RouteReuseStrategy

### Index

#### Methods

* [retrieve](#aempageroutereusestrategy.md_retrieve)
* [shouldAttach](#aempageroutereusestrategy.md_shouldattach)
* [shouldDetach](#aempageroutereusestrategy.md_shoulddetach)
* [shouldReuseRoute](#aempageroutereusestrategy.md_shouldreuseroute)
* [store](#aempageroutereusestrategy.md_store)

### Methods

####  retrieve

▸ **retrieve**(`route`: ActivatedRouteSnapshot): *DetachedRouteHandle | null*

Retrieves the previously stored route.

**Parameters:**

Name | Type |
------ | ------ |
`route` | ActivatedRouteSnapshot |

**Returns:** *DetachedRouteHandle | null*

___

####  shouldAttach

▸ **shouldAttach**(`route`: ActivatedRouteSnapshot): *boolean*

Determines if this route (and its subtree) should be reattached.

**Parameters:**

Name | Type |
------ | ------ |
`route` | ActivatedRouteSnapshot |

**Returns:** *boolean*

___

####  shouldDetach

▸ **shouldDetach**(`route`: ActivatedRouteSnapshot): *boolean*

Determines if this route (and its subtree) should be detached to be reused later.

**Parameters:**

Name | Type |
------ | ------ |
`route` | ActivatedRouteSnapshot |

**Returns:** *boolean*

___

####  shouldReuseRoute

▸ **shouldReuseRoute**(`future`: ActivatedRouteSnapshot, `curr`: ActivatedRouteSnapshot): *boolean*

Determines if a route should be reused

**Parameters:**

Name | Type |
------ | ------ |
`future` | ActivatedRouteSnapshot |
`curr` | ActivatedRouteSnapshot |

**Returns:** *boolean*

___

####  store

▸ **store**(`route`: ActivatedRouteSnapshot, `detachedTree`: DetachedRouteHandle): *void*

Not storing deteached route.

**Parameters:**

Name | Type |
------ | ------ |
`route` | ActivatedRouteSnapshot |
`detachedTree` | DetachedRouteHandle |

**Returns:** *void*

<a id="componentmappingwithconfig.md"></a>

## Class: ComponentMappingWithConfig

The current class extends the @adobe/cq-spa-component-mapping#Mapto library and features with Angular specifics such as

- Storing the editing configurations for each resource type

### Hierarchy

* **ComponentMappingWithConfig**

### Index

#### Constructors

* [constructor](#componentmappingwithconfig.md_constructor)

#### Methods

* [get](#componentmappingwithconfig.md_get)
* [getEditConfig](#componentmappingwithconfig.md_geteditconfig)
* [map](#componentmappingwithconfig.md_map)

### Constructors

####  constructor

\+ **new ComponentMappingWithConfig**(`spaMapping`: SPAComponentMapping): *[ComponentMappingWithConfig](#componentmappingwithconfig.md)*

**Parameters:**

Name | Type |
------ | ------ |
`spaMapping` | SPAComponentMapping |

**Returns:** *[ComponentMappingWithConfig](#componentmappingwithconfig.md)*

### Methods

####  get

▸ **get**(`resourceType`: any): *any*

Returns the component class for the given resourceType

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceType` | any | Resource type for which the component class has been stored  |

**Returns:** *any*

___

####  getEditConfig

▸ **getEditConfig**(`resourceType`: any): *any*

Returns the EditConfig structure for the given type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceType` | any | Resource type for which the configuration has been stored  |

**Returns:** *any*

___

####  map

▸ **map**(`resourceTypes`: any, `clazz`: any, `editConfig`: any): *void*

Stores a component class for the given resource types and also allows to provide an EditConfig object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`resourceTypes` | any | - | List of resource types |
`clazz` | any | - | Component class to be stored |
`editConfig` | any | null | - |

**Returns:** *void*

<a id="directivecomponent.md"></a>

## Class: DirectiveComponent

### Hierarchy

* **DirectiveComponent**

### Index

#### Properties

* [attr1](#directivecomponent.md_attr1)
* [attr2](#directivecomponent.md_attr2)

#### Accessors

* [hostClasses](#directivecomponent.md_hostclasses)

### Properties

####  attr1

• **attr1**: *any*

___

####  attr2

• **attr2**: *any*

### Accessors

####  hostClasses

• **get hostClasses**(): *string*

**Returns:** *string*


### Variables

* [ALLOWED_COMPONENT_PLACEHOLDER_CLASS_NAMES](README.md#const-allowed_component_placeholder_class_names)
* [ALLOWED_COMPONENT_TITLE_CLASS_NAMES](README.md#const-allowed_component_title_class_names)
* [ALLOWED_PLACEHOLDER_CLASS_NAMES](README.md#const-allowed_placeholder_class_names)
* [CONTAINER_CLASS_NAMES](README.md#const-container_class_names)
* [EDIT_MODE](README.md#const-edit_mode)
* [PAGE_MODEL_SEPARATOR](README.md#const-page_model_separator)
* [PLACEHOLDER_CLASS_NAME](README.md#const-placeholder_class_name)
* [PLACEHOLDER_CLASS_NAMES](README.md#const-placeholder_class_names)
* [PLACEHOLDER_ITEM_NAME](README.md#const-placeholder_item_name)
* [PREVIEW_MODE](README.md#const-preview_mode)
* [RESPONSIVE_GRID_TYPE](README.md#const-responsive_grid_type)
* [WCM_MODE_META_SELECTOR](README.md#const-wcm_mode_meta_selector)
* [componentMapping](README.md#let-componentmapping)

### Functions

* [MapTo](README.md#mapto)
* [getWCMMode](README.md#getwcmmode)
* [isBrowser](README.md#isbrowser)

### Object literals

* [Constants](README.md#const-constants)
* [Utils](README.md#const-utils)

## Variables

### `Const` ALLOWED_COMPONENT_PLACEHOLDER_CLASS_NAMES

• **ALLOWED_COMPONENT_PLACEHOLDER_CLASS_NAMES**: *"aem-AllowedComponent--component cq-placeholder placeholder"* = "aem-AllowedComponent--component cq-placeholder placeholder"

___

### `Const` ALLOWED_COMPONENT_TITLE_CLASS_NAMES

• **ALLOWED_COMPONENT_TITLE_CLASS_NAMES**: *"aem-AllowedComponent--title"* = "aem-AllowedComponent--title"

___

### `Const` ALLOWED_PLACEHOLDER_CLASS_NAMES

• **ALLOWED_PLACEHOLDER_CLASS_NAMES**: *"aem-AllowedComponent--list"* = "aem-AllowedComponent--list"

___

### `Const` CONTAINER_CLASS_NAMES

• **CONTAINER_CLASS_NAMES**: *"aem-container"* = "aem-container"

___

### `Const` EDIT_MODE

• **EDIT_MODE**: *string* = "edit"

The editor is in one of the edition modes

___

### `Const` PAGE_MODEL_SEPARATOR

• **PAGE_MODEL_SEPARATOR**: *"/jcr:content/"* = "/jcr:content/"

___

### `Const` PLACEHOLDER_CLASS_NAME

• **PLACEHOLDER_CLASS_NAME**: *"cq-placeholder"* = "cq-placeholder"

___

### `Const` PLACEHOLDER_CLASS_NAMES

• **PLACEHOLDER_CLASS_NAMES**: *"aem-Grid-newComponent"* = "aem-Grid-newComponent"

___

### `Const` PLACEHOLDER_ITEM_NAME

• **PLACEHOLDER_ITEM_NAME**: *"*"* = "*"

___

### `Const` PREVIEW_MODE

• **PREVIEW_MODE**: *string* = "preview"

The editor is in preview mode

___

### `Const` RESPONSIVE_GRID_TYPE

• **RESPONSIVE_GRID_TYPE**: *"wcm/foundation/components/responsivegrid"* = "wcm/foundation/components/responsivegrid"

___

### `Const` WCM_MODE_META_SELECTOR

• **WCM_MODE_META_SELECTOR**: *string* = "meta[property="cq:wcmmode"]"

Selector that identifies the node that contains the WCM mode state

___

### `Let` componentMapping

• **componentMapping**: *[ComponentMappingWithConfig](classes/componentmappingwithconfig.md)‹›* = new ComponentMappingWithConfig(SPAComponentMapping)

## Functions

###  MapTo

▸ **MapTo**(`resourceTypes`: any): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`resourceTypes` | any |

**Returns:** *(Anonymous function)*

___

###  getWCMMode

▸ **getWCMMode**(): *any*

Returns the current WCM mode

<p>Note that the value isn't, as of the date of this writing, updated by the editor</p>

**Returns:** *any*

___

###  isBrowser

▸ **isBrowser**(): *boolean*

Returns if we are in the browser context or not by checking for the
existence of the window object

**Returns:** *boolean*

## Object literals

### `Const` Constants

### ▪ **Constants**: *object*

###  CHILDREN_PROP

• **CHILDREN_PROP**: *any* = PMConstants.CHILDREN_PROP

Children of an item

###  DATA_PATH_PROP

• **DATA_PATH_PROP**: *string* = ":dataPath"

Path of the resource in the model

###  HIERARCHY_TYPE_PROP

• **HIERARCHY_TYPE_PROP**: *any* = PMConstants.HIERARCHY_TYPE_PROP

Hierarchical type of the item

###  ITEMS_ORDER_PROP

• **ITEMS_ORDER_PROP**: *any* = PMConstants.ITEMS_ORDER_PROP

Order in which the items should be listed

###  ITEMS_PROP

• **ITEMS_PROP**: *any* = PMConstants.ITEMS_PROP

List of child items of an item

###  NEW_SECTION_CLASS_NAMES

• **NEW_SECTION_CLASS_NAMES**: *string* = "new section"

Class names associated with a new section component

###  PATH_PROP

• **PATH_PROP**: *any* = PMConstants.PATH_PROP

Path of the item

###  TYPE_PROP

• **TYPE_PROP**: *any* = PMConstants.TYPE_PROP

___


### `Const` Utils

### ▪ **Utils**: *object*

Helper functions for interacting with the AEM environment

###  isInEditor

▸ **isInEditor**(): *boolean*

Is the app used in the context of the AEM Page editor

**Returns:** *boolean*


## Documentation 

The [technical documentation](https://www.adobe.com/go/aem6_4_docs_spa_en) is already available, but if you are unable to solve your problem or you found a bug you can always [contact us](https://www.adobe.com/go/aem6_4_support_en) and ask for help!

## Changelog 

### 2.0.2 - 5 June 2020

* Update to latest `cq-spa-page-model-manager`

### 2.0.1 - 25 February 2020

* Doc: Improving the documentation

### 2.0.0 - 21 February 2020

* **BREAKING CHANGE** Migration to Angular 9
* Improvement: improving the change detection for components, using ChangeDetectorRef in favor of ngZone

### 1.2.0 - 5 April 2019

* **NEW FEATURE** Template Editor
  * Give access to the list of Allowed Components from the ResponsiveGrid component

### 1.1.1 - 12 December 2018

* Doc: Improving code documentation

### 1.1.0 - 12 December 2018

* Improvement: Add dynamic routing

### 1.0.3 - 18 October 2018

* Fix: Component cqItem attribute binding

### 1.0.2 - 28 September 2018

* Adapting to the new PageModelManager API
* Refactoring the Container to be independent of the ModelManager. This is achieved by refactoring the aem-directive to only be in charge of creating the dynamic components. This way consumers can add their own logic to update the model, such as from a store.
* **BREAKING CHANGE** Refactor aem-directive to be independent of ModelManager
* **BREAKING CHANGE** Introduced aem-model-provider component which is in charge now of communication with the ModelManager. This has been added only on AResponsiveGrid
* **BREAKING CHANGE** The container component is now opaque of ModelManager, therefore it will **not** respond to updates from the editor. Extend the container and use aem-model-provider component to have this functionality added to it.

* **BREAKING CHANGE** 'dragDropName' support removed for EditConfig in ComponentMapping

### 0.0.7-beta.2 - 1 August 2018

* **BREAKING CHANGE** Refactoring of the Container, ResponsiveGrid and Placeholders to improve extensibility
* **BREAKING CHANGE** Relocation of the columnClassNames field from the ResponsiveColumn to the ResponsiveGrid to respect the latest model representation, the field type changed 
* Server-side rendering preparation, fixing usage of native setAttribute.

### 0.0.7-beta.1 - 27 July 2018

* **BREAKING CHANGE** Properties are no longer bundled in cqModel, we inject all properties directly on the components
  * Implications, all components should now remove cqModel property and use directly the api properties that they want to consume.

