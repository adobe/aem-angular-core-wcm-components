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


import {DownloadV1Component} from './download.v1.component';

import {AemAngularCoreWcmComponentsCore,MetaUtils} from "@adobe/aem-core-components-angular-base/core";


describe('DownloadV1Component', () => {

    let component: DownloadV1Component;
    let fixture: ComponentFixture<DownloadV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            imports: [AemAngularCoreWcmComponentsCore],
            declarations: [
                DownloadV1Component
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [DownloadV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(DownloadV1Component);

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


    it('render a download', () => {
        isInEditorSpy.and.returnValue(true);

        component.description = 'test';
        component.format = '';
        component.filename = 'test';
        component.id = 'myId';
        component.url = '/download/image.jpg';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        component.description = '<div id="mydescription">test</div>';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-download');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');
        expect(wrapper.querySelector('div.cmp-download__description').innerHTML).toEqual('<div id="mydescription">test</div>');

        expect(wrapper.querySelector('div.cmp-download__properties')).toBeNull();
        expect(wrapper.querySelector('a.cmp-download__action')).toBeNull();

    });

    it('render a download button with a custom css class', () => {

        isInEditorSpy.and.returnValue(true);

        component.description = 'test';
        component.format = '';
        component.filename = 'test';
        component.id = 'myId';
        component.url = '/download/image.jpg';
        component.baseCssClass = 'mycustomcss';
        component.actionText = 'order now!';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.mycustomcss');

        expect(wrapper.querySelector('a.mycustomcss__action').innerText).toEqual('order now!');

    });


    it('should display properties', () => {

        isInEditorSpy.and.returnValue(true);

        component.description = 'test';
        component.format = '';
        component.filename = 'test';
        component.id = 'myId';
        component.url = '/download/image.jpg';

        component.displayFilename = true;
        component.displayFormat = true;
        component.displaySize = true;

        component.filename = 'myfile.jpg';
        component.format = 'JPEG';
        component.size = '99999999999 terabytes';
        component.labels.fileformat = 'Custom label';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const propertiesWrapper = element.querySelector('dl.cmp-download__properties');

        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--format dt.cmp-download__property-label').innerText).toEqual('Custom label');
        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--format dd.cmp-download__property-content').innerText).toEqual('JPEG');

        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--size dt.cmp-download__property-label').innerText).toEqual('Size');
        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--size dd.cmp-download__property-content').innerText).toEqual('99999999999 terabytes');

        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--filename dt.cmp-download__property-label').innerText).toEqual('File name');
        expect(propertiesWrapper.querySelector('div.cmp-download__property.cmp-download__property--filename dd.cmp-download__property-content').innerText).toEqual('myfile.jpg');

    });


    it('render a download button with a custom css class', () => {

        isInEditorSpy.and.returnValue(true);

        component.description = 'test';
        component.format = '';
        component.filename = 'test';
        component.id = 'myId';
        component.url = '/download/image.jpg';
        component.baseCssClass = 'mycustomcss'
        component.actionText = 'order now!';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.mycustomcss');

        expect(wrapper.querySelector('a.mycustomcss__action').innerText).toEqual('order now!');

    });

    it('render different heading types', () => {
        isInEditorSpy.and.returnValue(true);

        component.description = 'test';
        component.format = '';
        component.filename = 'test';
        component.id = 'myId';
        component.url = '/download/image.jpg';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        component.title = 'my awesome download';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-download');

        expect(wrapper.querySelector('h3.cmp-download__title a').innerText).toEqual('my awesome download');


        component.titleType = 'h1';
        fixture.detectChanges();

        expect(wrapper.querySelector('h1.cmp-download__title a').innerText).toEqual('my awesome download');

        component.titleType = 'h2';
        fixture.detectChanges();

        expect(wrapper.querySelector('h2.cmp-download__title a').innerText).toEqual('my awesome download');

        component.titleType = 'h3';
        fixture.detectChanges();

        expect(wrapper.querySelector('h3.cmp-download__title a').innerText).toEqual('my awesome download');

        component.titleType = 'h4';
        fixture.detectChanges();

        expect(wrapper.querySelector('h4.cmp-download__title a').innerText).toEqual('my awesome download');

        component.titleType = 'h5';
        fixture.detectChanges();

        expect(wrapper.querySelector('h5.cmp-download__title a').innerText).toEqual('my awesome download');

        component.titleType = 'h6';
        fixture.detectChanges();

        expect(wrapper.querySelector('h6.cmp-download__title a').innerText).toEqual('my awesome download');

    });

});
