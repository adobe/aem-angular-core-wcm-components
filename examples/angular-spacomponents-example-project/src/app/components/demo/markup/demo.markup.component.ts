import {Component, Input, OnInit} from "@angular/core";
import {AbstractMappedComponent, MappedComponentProperties} from "@adobe/aem-angular-editable-components";

export interface DemoMarkupModel extends MappedComponentProperties {
    markup: string
}

@Component({
    selector: 'demo',
    templateUrl: './demo.markup.component.html'
})
export class DemoMarkupComponent extends AbstractMappedComponent implements DemoMarkupModel {

    @Input() markup;

}