import { UserService } from './../../../core/user/user.service';
import { OnInit, ElementRef, Renderer } from '@angular/core';
import { Photo } from './../../photo/photo';
import { Input, Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[photoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(private element: ElementRef<any>,
        // tslint:disable-next-line: deprecation
        private renderer: Renderer,
        private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            if (!user || user.id !== this.ownedPhoto.userId) {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
        });
    }
}
