import { NgModule } from '@angular/core';
import { AEMComponentDirective } from "./layout/aem-component.directive";
import { AEMContainerComponent } from "./layout/aem-container/aem-container.component";
import { AEMResponsiveGridComponent } from "./layout/aem-responsivegrid/aem-responsivegrid.component";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],

  declarations: [AEMContainerComponent, AEMResponsiveGridComponent, AEMComponentDirective],
  exports: [AEMContainerComponent, AEMResponsiveGridComponent, AEMComponentDirective]
})
export class SpaAngularEditableComponentsModule { }
