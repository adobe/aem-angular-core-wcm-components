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

### Implements

* `AfterViewInit`

### Index

#### Constructors

* [constructor](#aemcomponentdirective.md_constructor)

#### Properties

* [aemComponent](#aemcomponentdirective.md_aemcomponent)
* [cqPath](#aemcomponentdirective.md_cqpath)
* [itemAttrs](#aemcomponentdirective.md_itemattrs)
* [itemName](#aemcomponentdirective.md_itemname)

#### Accessors

* [cqItem](#aemcomponentdirective.md_cqitem)
* [type](#aemcomponentdirective.md_type)

#### Methods

* [ngAfterViewInit](#aemcomponentdirective.md_ngafterviewinit)
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
<a id="aemcomponentdirective.md_cqpath"></a>

####  cqPath

**● cqPath**: *`string`*

Path to the model structure associated with the current component

___
<a id="aemcomponentdirective.md_itemattrs"></a>

####  itemAttrs

**● itemAttrs**: *`object`*

HtmlElement attributes for the current instance of the component

___
<a id="aemcomponentdirective.md_itemname"></a>

####  itemName

**● itemName**: *`string`*

Name of the current instance of the component

___

### Accessors

<a id="aemcomponentdirective.md_cqitem"></a>

####  cqItem

getcqItem(): `object`setcqItem(value: *`object`*): `void`

**Returns:** `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `object` |

**Returns:** `void`

___
<a id="aemcomponentdirective.md_type"></a>

####  type

gettype(): `any`

Returns the type of the cqItem if exists.

**Returns:** `any`

___

### Methods

<a id="aemcomponentdirective.md_ngafterviewinit"></a>

####  ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

**Returns:** `void`

___
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

↳  [AEMPageComponent](#aempagecomponent.md)

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

---

### Properties

<a id="aemcontainercomponent.md_classnames"></a>

####  classNames

**● classNames**: *`string`*

Class names of the current component

___
<a id="aemcontainercomponent.md_cqitems"></a>

####  cqItems

**● cqItems**: *`any`*

Map of model items included in the current container

___
<a id="aemcontainercomponent.md_cqitemsorder"></a>

####  cqItemsOrder

**● cqItemsOrder**: *`any`*

Array of model item keys

___
<a id="aemcontainercomponent.md_cqpath"></a>

####  cqPath

**● cqPath**: *`string`* = ""

Path to the model associated with the current instance of the component

___
<a id="aemcontainercomponent.md_modelname"></a>

####  modelName

**● modelName**: *`string`* = ""

Key of the model structure

___

### Accessors

<a id="aemcontainercomponent.md_hostclasses"></a>

####  hostClasses

gethostClasses(): `string`

**Returns:** `string`

___
<a id="aemcontainercomponent.md_isineditmode"></a>

####  isInEditMode

getisInEditMode(): `boolean`

Returns weather of not we are in the editor

**Returns:** `boolean`

___
<a id="aemcontainercomponent.md_placeholderpath"></a>

####  placeholderPath

getplaceholderPath(): `string`

Returns the placeholder path

**Returns:** `string`

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
<a id="aemcontainercomponent.md_gethostclassnames"></a>

####  getHostClassNames

▸ **getHostClassNames**(): `string`

Returns the class names of the container based on the data from the cqModel

**Returns:** `string`

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
<a id="aemcontainercomponent.md_getplaceholderclassnames"></a>

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): `string`

Returns the placeholder classes

**Returns:** `string`

___


<a id="aemmodelprovidercomponent.md"></a>

## Class: AEMModelProviderComponent

### Hierarchy

**AEMModelProviderComponent**

### Index

#### Constructors

* [constructor](#aemmodelprovidercomponent.md_constructor)

#### Properties

* [aemModelProvider](#aemmodelprovidercomponent.md_aemmodelprovider)
* [cqItem](#aemmodelprovidercomponent.md_cqitem)
* [cqPath](#aemmodelprovidercomponent.md_cqpath)
* [itemName](#aemmodelprovidercomponent.md_itemname)

#### Methods

* [ngDestroy](#aemmodelprovidercomponent.md_ngdestroy)
* [ngOnInit](#aemmodelprovidercomponent.md_ngoninit)
* [updateItem](#aemmodelprovidercomponent.md_updateitem)

---

### Constructors

<a id="aemmodelprovidercomponent.md_constructor"></a>

####  constructor

⊕ **new AEMModelProviderComponent**(ngZone: *`NgZone`*): [AEMModelProviderComponent](#aemmodelprovidercomponent.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| ngZone | `NgZone` |

**Returns:** [AEMModelProviderComponent](#aemmodelprovidercomponent.md)

___

### Properties

<a id="aemmodelprovidercomponent.md_aemmodelprovider"></a>

####  aemModelProvider

**● aemModelProvider**: *`any`*

___
<a id="aemmodelprovidercomponent.md_cqitem"></a>

####  cqItem

**● cqItem**: *`any`*

Model item associated with the current model provider component

___
<a id="aemmodelprovidercomponent.md_cqpath"></a>

####  cqPath

**● cqPath**: *`any`*

Path to the model associated with the current instance of the component

___
<a id="aemmodelprovidercomponent.md_itemname"></a>

####  itemName

**● itemName**: *`any`*

Name of the item associated with the current model provider component

___

### Methods

<a id="aemmodelprovidercomponent.md_ngdestroy"></a>

####  ngDestroy

▸ **ngDestroy**(): `void`

**Returns:** `void`

___
<a id="aemmodelprovidercomponent.md_ngoninit"></a>

####  ngOnInit

▸ **ngOnInit**(): `void`

**Returns:** `void`

___
<a id="aemmodelprovidercomponent.md_updateitem"></a>

####  updateItem

▸ **updateItem**(): `void`

Updates the item data

**Returns:** `void`

___


<a id="aempagecomponent.md"></a>

## Class: AEMPageComponent

### Hierarchy

 [AEMContainerComponent](#aemcontainercomponent.md)

**↳ AEMPageComponent**

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

---

### Properties

<a id="aempagecomponent.md_classnames"></a>

####  classNames

**● classNames**: *`string`*

Class names of the current component

___
<a id="aempagecomponent.md_cqitems"></a>

####  cqItems

**● cqItems**: *`any`*

Map of model items included in the current container

___
<a id="aempagecomponent.md_cqitemsorder"></a>

####  cqItemsOrder

**● cqItemsOrder**: *`any`*

Array of model item keys

___
<a id="aempagecomponent.md_cqpath"></a>

####  cqPath

**● cqPath**: *`string`* = ""

Path to the model associated with the current instance of the component

___
<a id="aempagecomponent.md_modelname"></a>

####  modelName

**● modelName**: *`string`* = ""

Key of the model structure

___

### Accessors

<a id="aempagecomponent.md_hostclasses"></a>

####  hostClasses

gethostClasses(): `string`

**Returns:** `string`

___
<a id="aempagecomponent.md_isineditmode"></a>

####  isInEditMode

getisInEditMode(): `boolean`

Returns weather of not we are in the editor

**Returns:** `boolean`

___
<a id="aempagecomponent.md_placeholderpath"></a>

####  placeholderPath

getplaceholderPath(): `string`

Returns the placeholder path

**Returns:** `string`

___

### Methods

<a id="aempagecomponent.md_getdatapath"></a>

####  getDataPath

▸ **getDataPath**(path: *`any`*): `any`

Returns the aggregated path of this container path and the provided path

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `any` |  the provided path to aggregate with the container path |

**Returns:** `any`

___
<a id="aempagecomponent.md_gethostclassnames"></a>

####  getHostClassNames

▸ **getHostClassNames**(): `string`

Returns the class names of the container based on the data from the cqModel

**Returns:** `string`

___
<a id="aempagecomponent.md_getitem"></a>

####  getItem

▸ **getItem**(itemKey: *`any`*): `any`

Returns the item data from the cqModel

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemKey | `any` |  the itemKey to look for in the items. |

**Returns:** `any`

___
<a id="aempagecomponent.md_getplaceholderclassnames"></a>

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): `string`

Returns the placeholder classes

**Returns:** `string`

___


<a id="aemresponsivegridcomponent.md"></a>

## Class: AEMResponsiveGridComponent

### Hierarchy

 [AEMContainerComponent](#aemcontainercomponent.md)

**↳ AEMResponsiveGridComponent**

### Index

#### Properties

* [classNames](#aemresponsivegridcomponent.md_classnames)
* [columnClassNames](#aemresponsivegridcomponent.md_columnclassnames)
* [columnCount](#aemresponsivegridcomponent.md_columncount)
* [cqItems](#aemresponsivegridcomponent.md_cqitems)
* [cqItemsOrder](#aemresponsivegridcomponent.md_cqitemsorder)
* [cqPath](#aemresponsivegridcomponent.md_cqpath)
* [gridClassNames](#aemresponsivegridcomponent.md_gridclassnames)
* [modelName](#aemresponsivegridcomponent.md_modelname)

#### Accessors

* [hostClasses](#aemresponsivegridcomponent.md_hostclasses)
* [isInEditMode](#aemresponsivegridcomponent.md_isineditmode)
* [placeholderPath](#aemresponsivegridcomponent.md_placeholderpath)

#### Methods

* [getAttrDataPath](#aemresponsivegridcomponent.md_getattrdatapath)
* [getColumnClassNames](#aemresponsivegridcomponent.md_getcolumnclassnames)
* [getDataPath](#aemresponsivegridcomponent.md_getdatapath)
* [getHostClassNames](#aemresponsivegridcomponent.md_gethostclassnames)
* [getItem](#aemresponsivegridcomponent.md_getitem)
* [getPlaceholderClassNames](#aemresponsivegridcomponent.md_getplaceholderclassnames)

---

### Properties

<a id="aemresponsivegridcomponent.md_classnames"></a>

####  classNames

**● classNames**: *`string`*

Class names of the current component

___
<a id="aemresponsivegridcomponent.md_columnclassnames"></a>

####  columnClassNames

**● columnClassNames**: *`Object`*

Map of class names corresponding to each child of the current responsive grid

___
<a id="aemresponsivegridcomponent.md_columncount"></a>

####  columnCount

**● columnCount**: *`number`*

Current number of columns of the grid

___
<a id="aemresponsivegridcomponent.md_cqitems"></a>

####  cqItems

**● cqItems**: *`any`*

Map of model items included in the current container

___
<a id="aemresponsivegridcomponent.md_cqitemsorder"></a>

####  cqItemsOrder

**● cqItemsOrder**: *`any`*

Array of model item keys

___
<a id="aemresponsivegridcomponent.md_cqpath"></a>

####  cqPath

**● cqPath**: *`string`* = ""

Path to the model associated with the current instance of the component

___
<a id="aemresponsivegridcomponent.md_gridclassnames"></a>

####  gridClassNames

**● gridClassNames**: *`string`*

Class names associated with the current responsive grid

___
<a id="aemresponsivegridcomponent.md_modelname"></a>

####  modelName

**● modelName**: *`string`* = ""

Key of the model structure

___

### Accessors

<a id="aemresponsivegridcomponent.md_hostclasses"></a>

####  hostClasses

gethostClasses(): `string`

**Returns:** `string`

___
<a id="aemresponsivegridcomponent.md_isineditmode"></a>

####  isInEditMode

getisInEditMode(): `boolean`

Returns weather of not we are in the editor

**Returns:** `boolean`

___
<a id="aemresponsivegridcomponent.md_placeholderpath"></a>

####  placeholderPath

getplaceholderPath(): `string`

Returns the placeholder path

**Returns:** `string`

___

### Methods

<a id="aemresponsivegridcomponent.md_getattrdatapath"></a>

####  getAttrDataPath

▸ **getAttrDataPath**(path: *`any`*): `any`

Returns the aggregated path of this container path and the provided path

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `any` |  the provided path to aggregate with the container path |

**Returns:** `any`

___
<a id="aemresponsivegridcomponent.md_getcolumnclassnames"></a>

####  getColumnClassNames

▸ **getColumnClassNames**(itemKey: *`string`*): `any`

Returns the column class names for a given column

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemKey | `string` |  The key of the column item |

**Returns:** `any`

___
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
<a id="aemresponsivegridcomponent.md_gethostclassnames"></a>

####  getHostClassNames

▸ **getHostClassNames**(): `string`

Returns the class names of the responsive grid based on the data from the cqModel

**Returns:** `string`

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
<a id="aemresponsivegridcomponent.md_getplaceholderclassnames"></a>

####  getPlaceholderClassNames

▸ **getPlaceholderClassNames**(): `string`

Returns the placeholder classes

**Returns:** `string`

___


<a id="aempagedataresolver.md"></a>

## Class: AemPageDataResolver

### Hierarchy

**AemPageDataResolver**

### Implements

* `Resolve`<`string`>

### Index

#### Constructors

* [constructor](#aempagedataresolver.md_constructor)

#### Methods

* [resolve](#aempagedataresolver.md_resolve)

---

### Constructors

<a id="aempagedataresolver.md_constructor"></a>

####  constructor

⊕ **new AemPageDataResolver**(): [AemPageDataResolver](#aempagedataresolver.md)

**Returns:** [AemPageDataResolver](#aempagedataresolver.md)

___

### Methods

<a id="aempagedataresolver.md_resolve"></a>

####  resolve

▸ **resolve**(route: *`ActivatedRouteSnapshot`*): `string`

Returns the absolute resource path without extension.
*__example__*: // returns: '/content/aa/bb' for route.url \[ 'content', 'aa', 'bb.html' \] resolve(route)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `ActivatedRouteSnapshot` |  route |

**Returns:** `string`
absolute resource path without extension

___


<a id="aempageroutereusestrategy.md"></a>

## Class: AemPageRouteReuseStrategy

Implements RouteReuseStrategy to customize route reuse.

### Hierarchy

**AemPageRouteReuseStrategy**

### Implements

* `RouteReuseStrategy`

### Index

#### Methods

* [retrieve](#aempageroutereusestrategy.md_retrieve)
* [shouldAttach](#aempageroutereusestrategy.md_shouldattach)
* [shouldDetach](#aempageroutereusestrategy.md_shoulddetach)
* [shouldReuseRoute](#aempageroutereusestrategy.md_shouldreuseroute)
* [store](#aempageroutereusestrategy.md_store)

---

### Methods

<a id="aempageroutereusestrategy.md_retrieve"></a>

####  retrieve

▸ **retrieve**(route: *`ActivatedRouteSnapshot`*):  `DetachedRouteHandle` &#124; `null`

Retrieves the previously stored route.

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` |

**Returns:**  `DetachedRouteHandle` &#124; `null`

___
<a id="aempageroutereusestrategy.md_shouldattach"></a>

####  shouldAttach

▸ **shouldAttach**(route: *`ActivatedRouteSnapshot`*): `boolean`

Determines if this route (and its subtree) should be reattached.

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` |

**Returns:** `boolean`

___
<a id="aempageroutereusestrategy.md_shoulddetach"></a>

####  shouldDetach

▸ **shouldDetach**(route: *`ActivatedRouteSnapshot`*): `boolean`

Determines if this route (and its subtree) should be detached to be reused later.

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` |

**Returns:** `boolean`

___
<a id="aempageroutereusestrategy.md_shouldreuseroute"></a>

####  shouldReuseRoute

▸ **shouldReuseRoute**(future: *`ActivatedRouteSnapshot`*, curr: *`ActivatedRouteSnapshot`*): `boolean`

Determines if a route should be reused

**Parameters:**

| Param | Type |
| ------ | ------ |
| future | `ActivatedRouteSnapshot` |
| curr | `ActivatedRouteSnapshot` |

**Returns:** `boolean`

___
<a id="aempageroutereusestrategy.md_store"></a>

####  store

▸ **store**(route: *`ActivatedRouteSnapshot`*, detachedTree: *`DetachedRouteHandle`*): `void`

Not storing deteached route.

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` |
| detachedTree | `DetachedRouteHandle` |

**Returns:** `void`

___


<a id="componentmappingwithconfig.md"></a>

## Class: ComponentMappingWithConfig

The current class extends the @adobe/cq-spa-component-mapping#Mapto library and features with Angular specifics such as

*   Storing the editing configurations for each resource type

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

Returns the component class for the given resourceType

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resourceType | `any` |  Resource type for which the component class has been stored |

**Returns:** `any`

___
<a id="componentmappingwithconfig.md_geteditconfig"></a>

####  getEditConfig

▸ **getEditConfig**(resourceType: *`any`*): `any`

Returns the EditConfig structure for the given type

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resourceType | `any` |  Resource type for which the configuration has been stored |

**Returns:** `any`

___
<a id="componentmappingwithconfig.md_map"></a>

####  map

▸ **map**(resourceTypes: *`any`*, clazz: *`any`*, editConfig?: *`any`*): `void`

Stores a component class for the given resource types and also allows to provide an EditConfig object

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| resourceTypes | `any` | - |  List of resource types |
| clazz | `any` | - |  Component class to be stored |
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

**● HIERARCHY_TYPE_PROP**: *`any`* =  PMConstants.HIERARCHY_TYPE_PROP

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

