import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { PhotoComment } from './../../photo/photo-comments';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css']
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

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService.addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => {
                this.commentForm.reset();
                alert('Comentado com sucesso!');
            }));

    }
}
