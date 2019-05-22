import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';


@NgModule({
    declarations: [ PhotoComponent,
                    PhotoListComponent,
                    PhotoFormComponent,
                    PhotosComponent,
                    FilterByDescription
    ], // PRIVADO
    // exports: [ PhotoComponent ], // PUBLICO - É NECESSÁRIO DEFINIR AQUI O COMPONENTE QUANDO O MESMO FOR UTILIZADO EM OUTRO MODULO
    imports: [ HttpClientModule,  // IMPORTANDO O HTTPCLIENT MODULE ATRAVES DO MODULO QUE REALMENTE NECESSITA
        CommonModule ] // IMPORTAR O COMMONMODULO PARA TORNAR DISPONÍVEL AS DIRETIVAS NATIVAS DO ANGULAR
})

export class PhotosModule {}
