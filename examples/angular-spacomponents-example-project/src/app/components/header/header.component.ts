import { Component, OnInit } from '@angular/core';
import {AbstractMappedComponent} from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AbstractMappedComponent implements OnInit {

  ngOnInit() {
  }

}
