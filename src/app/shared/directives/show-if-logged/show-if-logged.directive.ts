import { UserService } from './../../../core/user/user.service';
import { OnInit, ElementRef, Renderer } from '@angular/core';
import { Input, Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {
    currentDisplay: string;
    constructor(private element: ElementRef<any>,
        // tslint:disable-next-line: deprecation
        private renderer: Renderer,
        private userService: UserService) {

    }

    ngOnInit(): void {
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if (user) {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
       });
    }
}
