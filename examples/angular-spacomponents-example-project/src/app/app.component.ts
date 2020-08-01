import { Component } from '@angular/core';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import { AEMResponsiveGridComponent, AEMContainerComponent, MapTo } from '@adobe/cq-angular-editable-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    ModelManager.initialize();
  }
}

MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page')(AEMContainerComponent);
//MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
