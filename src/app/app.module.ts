import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule // IMPORTANDO MEU MODULO PHOTOSMODULE
    // HttpClientModule
    // IMPORTANDO O HTTP CLIENT PARA EXECUTAR COMANDOS HTTP
    // NA VERDADE O MESMO DEVE SER IMPORTADO PELO MODULO QUE REALMENTE PRECISA EDLE

    , ErrorsModule
    , CoreModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
