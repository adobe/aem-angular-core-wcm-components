


import {Component, Input, OnInit} from "@angular/core";

export interface PropertiesModel{
    properties: { [key: string]: string; }
}


@Component({
    selector: 'demo',
    templateUrl: './demo.properties.component.html'
})
export class DemoPropertiesComponent implements PropertiesModel{

    @Input() properties;

    keys() : Array<string> {
        return Object.keys(this.properties);
    }
}