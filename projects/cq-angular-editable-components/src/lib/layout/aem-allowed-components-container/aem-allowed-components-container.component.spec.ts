import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
  AEMAllowedComponentsContainerComponent, ALLOWED_COMPONENT_TITLE_CLASS_NAMES,
  ALLOWED_PLACEHOLDER_CLASS_NAMES
} from './aem-allowed-components-container.component';
import {ModelManager} from '@adobe/cq-spa-page-model-manager';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {AEMContainerComponent} from '../aem-container/aem-container.component';
import {AEMComponentDirective} from '../aem-component.directive';
import {AEMModelProviderComponent} from '../aem-model-provider/aem-model-provider.component';

describe('AemAllowedComponentsContainerComponent', () => {

  const TEST_COMPONENT_TITLE = 'test container title';

  let component: AEMAllowedComponentsContainerComponent;
  let fixture: ComponentFixture<AEMAllowedComponentsContainerComponent>;

  /**
   * Test the inner DOM structure of an applicable allowed component list
   * @param componentTitle                              Title of the component
   * @param elementText                                 Exposed text of the allowed component list
   * @param allowedComponents                           Data structure relative to the allowed components
   * @param expectedAllowedComponentPlaceholderCount    Number of expected allowed component placeholders
   */
  function testApplicableAllowedComponentList(componentTitle, elementText, allowedComponents, expectedAllowedComponentPlaceholderCount) {
    component.title = componentTitle;
    component.allowedComponents = allowedComponents;

    fixture.detectChanges();

    const element = fixture.nativeElement.firstElementChild;
    const titleElement = element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES);

    expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBe(true);

    expect(titleElement).not.toBeNull();
    expect(titleElement.dataset.text).toEqual(elementText);
    expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length).toEqual(expectedAllowedComponentPlaceholderCount);
  }

  beforeEach(() => {
    spyOn(ModelManager, 'addListener').and.returnValue(undefined);

    TestBed.configureTestingModule({
      declarations: [ AEMContainerComponent, AEMModelProviderComponent, AEMComponentDirective, AEMAllowedComponentsContainerComponent ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AEMAllowedComponentsContainerComponent]
      }
    }).compileComponents();

    fixture = TestBed.createComponent(AEMAllowedComponentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component with its default content structure and attributes', () => {
    const element = fixture.nativeElement.firstElementChild;
    const titleElement = element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES);

    expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBe(true);

    expect(titleElement).not.toBeNull();
    expect(titleElement.dataset.text).toEqual('No allowed components');
    expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length).toEqual(0);
  });

  it('should create the component with the default title and no allowed component', () => {
    const expectedAllowedComponentPlaceholderCount = 0;
    const allowedComponents = {
      applicable: true,
      components: []
    };

    testApplicableAllowedComponentList(TEST_COMPONENT_TITLE, 'No allowed components', allowedComponents, expectedAllowedComponentPlaceholderCount);
  });

  it('should create the component with a custom title and allowed components', () => {
    const expectedAllowedComponentPlaceholderCount = 2;
    const allowedComponents = {
      applicable: true,
      components: [{
        path: 'test/components/component1',
        title: 'Test component title 1'
      },
        {
          path: 'test/components/component2',
          title: 'Test component title 2'
        }]
    };

    testApplicableAllowedComponentList(TEST_COMPONENT_TITLE, TEST_COMPONENT_TITLE, allowedComponents, expectedAllowedComponentPlaceholderCount);
  });
});