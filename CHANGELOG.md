### 0.0.7-beta.2 - 1 August 2018

* Server-side rendering preparation, fixing usage of native setAttribute.

### 0.0.7-beta.1 - 27 July 2018

* **BREAKING CHANGE** Properties are no longer bundled in cqModel, we inject all properties directly on the components
  * Implications, all components should now remove cqModel property and use directly the api properties that they want to consume.
