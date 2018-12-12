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
