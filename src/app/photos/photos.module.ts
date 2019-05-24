import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';


@NgModule({
    declarations: [], // PRIVADO
    // exports: [ PhotoComponent ], // PUBLICO - É NECESSÁRIO DEFINIR AQUI O COMPONENTE QUANDO O MESMO FOR UTILIZADO EM OUTRO MODULO
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        CommonModule,
    ]
})

export class PhotosModule { }
