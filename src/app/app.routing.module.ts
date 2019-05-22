import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { Routes, RouterModule } from '@angular/router'; // importado para usar o tipo routes e tipar minha constante de rotas
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotoListComponent},
    { path: 'p/add', component: PhotoFormComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ] // EXPORTANDO O ROUTER MODULE PARA QUE NÃO SEJA
    // NECESSÁRIO IMPORTAR DIRETAMENTE NO MODULO QUE UTILIZA A ROTA, ASSIM BASTA UTILIZAR ESSE MODULO
})
export class AppRoutingModule { }
