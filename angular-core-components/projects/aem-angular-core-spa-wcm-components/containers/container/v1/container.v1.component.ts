import {Component, HostBinding, Input} from "@angular/core";
import {AEMResponsiveGridComponent, MappedComponentProperties} from "@adobe/aem-angular-editable-components";
import {ContainerProperties} from "@adobe/aem-core-components-angular-spa/core";

enum ContainerLayout {
    SIMPLE = "simple",
    RESPONSIVEGRID = "responsiveGrid"
}

export interface ContainerV1Properties extends ContainerProperties{
    layout: ContainerLayout;
    id: string;
    backgroundStyle: string;
}
@Component({
    selector: 'core-container-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './container.v1.component.html'
})
export class ContainerV1Component extends AEMResponsiveGridComponent implements ContainerV1Properties{

    @Input() layout: ContainerLayout;
    @Input() id: string;
    @Input() backgroundStyle: string;

    @HostBinding('class') baseCssClass = 'cmp-container';

    showResponsiveGrid():boolean{
        return this.layout === ContainerLayout.RESPONSIVEGRID;
    }

    get cssStyles(){
        return {
            background: this.backgroundStyle
        }
    }
}