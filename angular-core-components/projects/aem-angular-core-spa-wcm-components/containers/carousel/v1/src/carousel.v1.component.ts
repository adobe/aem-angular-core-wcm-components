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


import {ChangeDetectorRef, Component, HostBinding, Inject, Input, OnInit, PLATFORM_ID} from "@angular/core";
import {ContainerProperties,AbstractContainerComponent} from "@adobe/aem-core-components-angular-spa/core";
import {isPlatformBrowser} from "@angular/common";

export interface CarouselV1PropertiesAccessibility {
    play: string;
    pause: string;
    next: string;
    previous: string;
    slide: string;
    indicator: string;
    indicators:string;
}

const formatFn = (value:string, args:any[]) => {
    var content = value;
    for (var i = 0; i < args.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, args[i]);
    }
    return content;
};

export interface CarouselV1Properties extends ContainerProperties{
    id:string;
    autopauseDisabled:boolean
    accessibility:CarouselV1PropertiesAccessibility
}

@Component({
    selector: 'core-carousel-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath',
        '[attr.data-cmp-data-layer]': 'dataLayerString',
        '[attr.data-panelcontainer]': '"carousel"'
    },
    templateUrl: './carousel.v1.component.html'
})
export class CarouselV1Component extends AbstractContainerComponent implements CarouselV1Properties{

    @Input() autoplay:boolean = false;
    @Input() accessibilityLabel = 'Carousel';
    @Input() autopauseDisabled: false;
    @Input() activeIndex: number = 0;
    @Input() delay: number = 0;
    @HostBinding('class') baseCssClass = 'cmp-carousel';

    @Input() accessibility = {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide {0}',
        indicators: 'Choose a slide to display'
    };

    interval = 0;

    autoPlayIntervalOn = false;
    autoPlayHalted = false;

    constructor(private changeDetectorRef:ChangeDetectorRef,@Inject(PLATFORM_ID) protected _platformId: Object) {
        super(_platformId);
    }


    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        if (isPlatformBrowser(this._platformId) &&this.autoplay) {
            this.__autoPlay();
        }
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        if (isPlatformBrowser(this._platformId) && this.autoplay && !this.isInEditor) {
            this.clearAutoPlay();
        }
    }

    onAuthorIndexChange(index:number){
        this.activeIndex = index;
        this.clearAutoPlay();
    }

    handleOnMouseEnter(){
        if(!this.autopauseDisabled && this.autoplay){
            this.autoPlayHalted = true;
        }
    }

    handleOnMouseLeave(){
        if(!this.autopauseDisabled && this.autoplay){
            this.autoPlayHalted = false;
        }
    }

    getAriaControlsId(index:number){
        return `${this.id}-item-${index}`;
    }

    getIndicatorAriaLabel(index:number){
        return formatFn(this.accessibility.indicator, [index + 1]);
    }

    getSlideAriaLabel(index:number){
        return formatFn(this.accessibility.slide, [index + 1, this.cqItemsOrder.length]);
    }

    getSlideCssClass(index:number){
        return (this.activeIndex === index) ? `${this.baseCssClass}__item ${this.baseCssClass}__item--active` :  `${this.baseCssClass}__item`;
    }

    getIndicatorCssClass(index:number){
        return (this.activeIndex === index) ? `${this.baseCssClass}__indicator ${this.baseCssClass}__indicator--active` : `${this.baseCssClass}__indicator`;
    }

    handleOnButtonPrev(){
        this.prevSlide();
    }

    handleOnButtonNext(){
        this.nextSlide();
    }

    handleIndicatorClick(index){
        this.activeIndex = index;
    }

    __autoPlay(){
        this.autoPlayIntervalOn = true;
        this.interval = window.setInterval(() => {
            this.autoPlayTick();
        }, this.delay);
        this.changeDetectorRef.detectChanges();
    }

    autoPlayTick() {

        if (!this.autoplay || this.autoPlayHalted || this.cqItemsOrder.length <= 1) {
            return;
        }

        this.nextSlide();
    };

    clearAutoPlay = () => {
        this.autoPlayIntervalOn = false;
        this.changeDetectorRef.detectChanges();
        window.clearInterval(this.interval);
    };

    toggleAutoPlay(toggle:boolean){
        if(toggle){
            this.__autoPlay();
        }else{
            this.clearAutoPlay();
        }
    }

    nextSlide(){

        const activeIndex = this.__getActiveIndex();

        if(activeIndex=== (this.cqItemsOrder.length-1)){

            this.__setSlide(0);
        }else{
            this.__setSlide(activeIndex + 1);
        }
    }

    prevSlide(){
        const activeIndex = this.__getActiveIndex();
        if(activeIndex === 0){

            this.__setSlide(this.cqItemsOrder.length - 1);
        }else{
            this.__setSlide(activeIndex - 1);
        }
    }

    __getActiveIndex(){
        return this.activeIndex;
    }

    __setSlide(index){
        this.activeIndex = index;
    }
}
