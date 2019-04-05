import { Component, Input } from '@angular/core';
import { AEMContainerComponent } from '../aem-container/aem-container.component';

export const ALLOWED_PLACEHOLDER_CLASS_NAMES = 'aem-AllowedComponent--list';
export const ALLOWED_COMPONENT_TITLE_CLASS_NAMES = 'aem-AllowedComponent--title';
export const ALLOWED_COMPONENT_PLACEHOLDER_CLASS_NAMES = 'aem-AllowedComponent--component cq-placeholder placeholder';

@Component({
  selector: 'aem-allowed-components-container',
  templateUrl: './aem-allowed-components-container.component.html',
  styleUrls: ['./aem-allowed-components-container.component.css']
})
export class AEMAllowedComponentsContainerComponent extends AEMContainerComponent {

  @Input() title: string;

  @Input() emptyLabel: string = 'No allowed components';

  @Input() allowedComponents: {
    applicable: boolean,
    components
  };

  isAllowedComponentsApplicable() {
    return this.isInEditMode && this.allowedComponents && this.allowedComponents.applicable;
  }

  getAllowedComponentListPlaceholderClassNames() {
    return super.getPlaceholderClassNames() + ' ' + ALLOWED_PLACEHOLDER_CLASS_NAMES;
  }

  getAllowedComponentListLabel() {
    const hasComponents = this.allowedComponents && this.allowedComponents.components && this.allowedComponents.components.length > 0;
    return hasComponents ? this.title : this.emptyLabel;
  }

  getAllowedComponents() {
    return this.allowedComponents && this.allowedComponents.components || [];
  }

  get allowedComponentListTitleClassNames() {
    return ALLOWED_COMPONENT_TITLE_CLASS_NAMES;
  }

  get allowedComponentClassNames() {
    return ALLOWED_COMPONENT_PLACEHOLDER_CLASS_NAMES;
  }
}
