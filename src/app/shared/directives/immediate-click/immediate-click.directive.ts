import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { element } from 'protractor';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit {


    // tslint:disable-next-line: no-shadowed-variable
    constructor(private element: ElementRef<any>, private platformDetectorService: PlatformDetectorService) {

    }

    ngOnInit(): void {
        this.platformDetectorService.isPlatformBrowser &&
        this.element.nativeElement.click();
    }

 }