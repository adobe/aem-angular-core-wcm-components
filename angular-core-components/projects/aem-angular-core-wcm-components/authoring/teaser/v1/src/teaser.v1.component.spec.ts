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


import {TeaserV1Component} from './teaser.v1.component';
import {AemAngularCoreWcmComponentsCore, MetaUtils } from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";
import {AemAngularCoreWcmComponentsTitleV2, TitleV2Component} from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import {AemAngularCoreWcmComponentsImageV2, ImageV2Component} from "@adobe/aem-core-components-angular-base/authoring/image/v2";


describe('TeaserV1Component', () => {

    let component: TeaserV1Component;
    let fixture: ComponentFixture<TeaserV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                TeaserV1Component
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                AemAngularCoreWcmComponentsTitleV2,
                AemAngularCoreWcmComponentsImageV2,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TeaserV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TeaserV1Component);

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


    it('render a teaser', () => {
        isInEditorSpy.and.returnValue(false);


        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.title = 'He is the best!';
        component.imagePath = '/content/dam/chuck/norris.jpg';
        component.description = 'Chuck Norris';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-teaser');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('.cmp-teaser__image core-image-v2')).toBeDefined();
        expect(wrapper.querySelector('.cmp-teaser__action-container')).toBeNull();
        expect(wrapper.querySelector('.cmp-teaser__pretitle')).toBeNull();

        component.pretitle = 'The great...';

        component.actionsEnabled = true;
        component.actions = [
            {
                URL: "/content/clickbait.html",
                title: "Clickbait",
                routed: false
            },
            {
                URL: "/content/clickbait2.html",
                title: "Clickbait2",
                routed: false
            }
        ];

        fixture.detectChanges();

        expect(wrapper.querySelector('.cmp-teaser__pretitle').innerText).toEqual('The great...');

        const actionContainer = wrapper.querySelector('.cmp-teaser__action-container');

        expect(actionContainer.querySelector(`a.cmp-teaser__action-link[href="${component.actions[0].URL}"]`).innerText).toEqual(component.actions[0].title);
        expect(actionContainer.querySelector(`a.cmp-teaser__action-link[href="${component.actions[1].URL}"]`).innerText).toEqual(component.actions[1].title);

    });


    it('routes the first but not the second link', () => {


        isInEditorSpy.and.returnValue(false);


        component.title = 'He is the best!';
        component.imagePath = '/content/dam/chuck/norris.jpg';
        component.description = 'Chuck Norris';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-teaser');

        expect(wrapper.querySelector('.cmp-teaser__image core-image-v2')).toBeDefined();
        expect(wrapper.querySelector('.cmp-teaser__action-container')).toBeNull();
        expect(wrapper.querySelector('.cmp-teaser__pretitle')).toBeNull();

        component.pretitle = 'The great...';

        component.actionsEnabled = true;
        component.actions = [
            {
                URL: "/content/clickbait.html",
                title: "Clickbait",
                routed: false
            },
            {
                URL: "/content/clickbait2.html",
                title: "Clickbait2",
                routed: true
            }
        ];

        fixture.detectChanges();

        expect(wrapper.querySelector('.cmp-teaser__pretitle').innerText).toEqual('The great...');

        const actionContainer = wrapper.querySelector('.cmp-teaser__action-container');

        expect(actionContainer.querySelector(`a.cmp-teaser__action-link[href="${component.actions[0].URL}"]`).innerText).toEqual(component.actions[0].title);
        expect(actionContainer.querySelector(`a.cmp-teaser__action-link[href="${component.actions[1].URL}"]`).innerText).toEqual(component.actions[1].title);


        const linkDebugEl1 = fixture.debugElement.query(By.css(`a.cmp-teaser__action-link[href="${component.actions[0].URL}"]`));
        expect(() => linkDebugEl1.injector.get(RouterLinkWithHref)).toThrowError();

        const linkDebugEl2 = fixture.debugElement.query(By.css(`a.cmp-teaser__action-link[href="${component.actions[1].URL}"]`));

        const routerLinkInstance = linkDebugEl2.injector.get(RouterLinkWithHref);
        expect(routerLinkInstance['commands']).toEqual([ component.actions[1].URL]);
        expect(routerLinkInstance['href']).toEqual( component.actions[1].URL);
    });


});
