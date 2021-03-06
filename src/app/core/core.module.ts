import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/show-if-logged.module';
import { MenuModule } from './../shared/components/menu/menu.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule, AlertModule, LoadingModule, MenuModule, ShowIfLoggedModule],
    exports: [HeaderComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {   }