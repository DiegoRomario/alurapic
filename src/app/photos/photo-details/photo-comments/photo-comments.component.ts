import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { PhotoComment } from './../../photo/photo-comments';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    comments$: Observable<PhotoComment[]>;
    commentForm: FormGroup;
    constructor(private photoService: PhotoService,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(300)
            ])]
        }); 
     }
}
