import { CardModule } from './../../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ],
  declarations: [PhotoListComponent,
                 PhotosComponent,
                 LoadButtonComponent,
                 FilterByDescription,
                 SearchComponent,
                 SearchComponent
                ]
})
export class PhotoListModule { }