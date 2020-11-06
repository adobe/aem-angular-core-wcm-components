import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MapTo, MappedComponentProperties} from '@adobe/aem-angular-editable-components';
import {AbstractMappedComponent} from "@adobe/aem-angular-editable-components";

export interface TextComponentProperties extends MappedComponentProperties{
  richText: boolean;
  text: string;
}

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends AbstractMappedComponent implements OnInit, MappedComponentProperties{
  @Input() richText;
  @Input() text;

  constructor(private sanitizer: DomSanitizer) {
    super();
  }

  get content() {
    const textValue = this.text || '';

    if (this.richText) {
      return this.sanitizer.bypassSecurityTrustHtml(textValue);
    } else {
      return textValue;
    }
  }

  ngOnInit() {}


}

const TextEditConfig = {
  emptyLabel: 'Text',

  isEmpty: function(componentData) {
    return !componentData || !componentData.text || componentData.text.trim().length < 1;
  }
};
