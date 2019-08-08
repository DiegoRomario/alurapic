import { PhotoDetailsModule } from './../photo-details/photo-details.module';
import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VMessageModule,
    PhotoModule,
    ImmediateClickModule,
    PhotoDetailsModule
  ],
  declarations: [PhotoFormComponent]
})
export class PhotoFormModule { }
