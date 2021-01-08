/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';


import {TitleV2Component} from './title.v2.component';
import {AemAngularCoreWcmComponentsCore, MetaUtils} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";


describe('TitleV2Component', () => {

    let component: TitleV2Component;
    let fixture: ComponentFixture<TitleV2Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                TitleV2Component
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TitleV2Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TitleV2Component);

        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create placeholder', () => {
        isInEditorSpy.and.returnValue(true);
        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect(element.querySelector('core-placeholder .cq-placeholder')).toBeDefined();
    });

    it('should not render the component', () => {
        isInEditorSpy.and.returnValue(false);
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(component.isEmpty).toBeTrue();
        expect(element.querySelector('core-placeholder .cq-placeholder')).toBeNull();
    });


    it('render a title', () => {
        isInEditorSpy.and.returnValue(false);

        component.text = 'Chuck Norris';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-title');
        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('h3.cmp-title__text').innerText).toEqual('Chuck Norris');
        expect(wrapper.querySelector('a')).toBeNull();

        component.type = 'h1';
        fixture.detectChanges();
        expect(wrapper.querySelector('h1.cmp-title__text').innerText).toEqual('Chuck Norris');

        component.type = 'h2';
        fixture.detectChanges();
        expect(wrapper.querySelector('h2.cmp-title__text').innerText).toEqual('Chuck Norris');

        component.type = 'h3';
        fixture.detectChanges();
        expect(wrapper.querySelector('h3.cmp-title__text').innerText).toEqual('Chuck Norris');

        component.type = 'h4';
        fixture.detectChanges();
        expect(wrapper.querySelector('h4.cmp-title__text').innerText).toEqual('Chuck Norris');

        component.type = 'h5';
        fixture.detectChanges();
        expect(wrapper.querySelector('h5.cmp-title__text').innerText).toEqual('Chuck Norris');

        component.type = 'h6';
        fixture.detectChanges();
        expect(wrapper.querySelector('h6.cmp-title__text').innerText).toEqual('Chuck Norris');


    });

    it('render a title with a custom bem class', () => {
        isInEditorSpy.and.returnValue(false);

        component.text = 'Chuck Norris';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.baseCssClass = 'custom-bem';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.custom-bem');
        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('h3.custom-bem__text').innerText).toEqual('Chuck Norris');
        expect(wrapper.querySelector('a')).toBeNull();

        component.type = 'h1';
        fixture.detectChanges();
        expect(wrapper.querySelector('h1.custom-bem__text').innerText).toEqual('Chuck Norris');

        component.type = 'h2';
        fixture.detectChanges();
        expect(wrapper.querySelector('h2.custom-bem__text').innerText).toEqual('Chuck Norris');

        component.type = 'h3';
        fixture.detectChanges();
        expect(wrapper.querySelector('h3.custom-bem__text').innerText).toEqual('Chuck Norris');

        component.type = 'h4';
        fixture.detectChanges();
        expect(wrapper.querySelector('h4.custom-bem__text').innerText).toEqual('Chuck Norris');

        component.type = 'h5';
        fixture.detectChanges();
        expect(wrapper.querySelector('h5.custom-bem__text').innerText).toEqual('Chuck Norris');

        component.type = 'h6';
        fixture.detectChanges();
        expect(wrapper.querySelector('h6.custom-bem__text').innerText).toEqual('Chuck Norris');


    });


    it('render a title with a link', () => {
        isInEditorSpy.and.returnValue(false);

        component.linkURL = '/content/chuck/norris.html';
        component.text = 'Chuck Norris';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-title');
        expect(wrapper.querySelector('a.cmp-title__item-link[href="/content/chuck/norris.html"] h3.cmp-title__text').innerText).toEqual('Chuck Norris');

        //check routing is disabled
        const linkDebugEl = fixture.debugElement.query(By.css('div.cmp-title a.cmp-title__item-link'));
        expect(() => linkDebugEl.injector.get(RouterLinkWithHref)).toThrowError();

    });


    it('render a title with a routed link', () => {
        isInEditorSpy.and.returnValue(false);

        component.routed = true;
        component.linkURL = '/my/custom/link.html';
        component.text = 'Chuck Norris';
        component.id = 'MyCustomId';

        fixture.detectChanges();

        const linkDebugEl = fixture.debugElement.query(By.css('div.cmp-title a.cmp-title__item-link'));
        const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
        expect(routerLinkInstance['commands']).toEqual(['/my/custom/link.html']);
        expect(routerLinkInstance['href']).toEqual('/my/custom/link.html');
    });


});
