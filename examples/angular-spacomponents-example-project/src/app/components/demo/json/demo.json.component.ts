import {Component, Input} from "@angular/core";

export interface DemoJsonModel{
    json:string
}

@Component({
    selector: 'demo',
    templateUrl: './demo.json.component.html'
})
export class DemoJsonComponent implements DemoJsonModel{

    @Input() json;

    get prettyJson(){
        return JSON.stringify(JSON.parse(this.json),null,2);
    }
}