import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
    imports: [ CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule ],
    exports: [PhotoDetailsComponent, PhotoCommentsComponent],
    providers: [],
})
export class PhotoDetailsModule {}
