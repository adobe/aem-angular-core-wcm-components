import {Component, Input} from "@angular/core";
import {AEMContainerComponent} from "@adobe/aem-angular-editable-components";

export interface DemoContainerProperties{
    fullWidth: boolean
}

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent extends AEMContainerComponent implements DemoContainerProperties{

    @Input() fullWidth;

    get getContainerClassNames() {
        return 'cmp-examples-demo__component cmp-examples-demo__component--width' +  (this.fullWidth ? 'Full': 'Auto');
    }

}