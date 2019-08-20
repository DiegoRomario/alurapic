import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // importado para usar o tipo routes e tipar minha constante de rotas
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Sign up'
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] // EXPORTANDO O ROUTER MODULE PARA QUE NÃO SEJA
    // NECESSÁRIO IMPORTAR DIRETAMENTE NO MODULO QUE UTILIZA A ROTA, ASSIM BASTA UTILIZAR ESSE MODULO
})
export class HomeRoutingModule { }
