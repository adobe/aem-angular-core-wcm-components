import {Component, Input} from "@angular/core";
import { MappedComponentProperties, AbstractMappedComponent } from '@adobe/aem-angular-editable-components';

export interface PropertiesModel extends MappedComponentProperties{
    properties: { [key: string]: string; }
}


@Component({
    selector: 'demo',
    templateUrl: './demo.properties.component.html'
})
export class DemoPropertiesComponent extends AbstractMappedComponent implements PropertiesModel{

    @Input() properties;

    keys() : Array<string> {
        return Object.keys(this.properties);
    }
}