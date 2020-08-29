import {Component, Input, OnInit} from "@angular/core";
import {MappedComponentProperties} from "@adobe/aem-core-components-angular-spa/core";

export interface DemoJsonModel{
    markup:string
}

@Component({
    selector: 'demo',
    templateUrl: './demo.markup.component.html'
})
export class DemoMarkupComponent implements DemoJsonModel{

    @Input() markup;

}