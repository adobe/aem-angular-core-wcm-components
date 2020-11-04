import {Component, ComponentFactoryResolver, Input, ViewContainerRef} from "@angular/core";
import {AEMContainerComponent, MappedComponentProperties} from "@adobe/aem-angular-editable-components";
import {DomSanitizer} from "@angular/platform-browser";
import {PdfService} from "./pdf.service";

export interface DemoContainerProperties extends MappedComponentProperties{
    fullWidth: boolean
}

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent extends AEMContainerComponent implements DemoContainerProperties{

    @Input() fullWidth;

    constructor(private pdfService: PdfService) {
        super();
    }

    generatePdf() {
        this.pdfService.generatePdf();
    }


    get getContainerClassNames() {
        return 'cmp-examples-demo__component cmp-examples-demo__component--width' +  (this.fullWidth ? 'Full': 'Auto');
    }

}

export default DemoComponent;

