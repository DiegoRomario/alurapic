import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { UserService } from '../user/user.service';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {
    let component: HeaderComponent;
    let router: Router;
    let userService: UserService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [UserService],
            imports: [
                RouterTestingModule.withRoutes([]),
                MenuModule,
                AlertModule,
                LoadingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);
        spyOn(userService, 'getUser').and.returnValue(of({
            name: 'Diego',
            email: 'diego@diego.com.br',
            id: 1
        }));

        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(component).toBeTruthy();
    });

    it('Ao solicitar logout deve navegar para rota default', () => {
        const spy = spyOn(userService, 'logout').and.returnValue(null);
        const spyRouter = spyOn(router, 'navigate');
        component.logout();
        expect(spy).toHaveBeenCalled();
        expect(spyRouter).toHaveBeenCalledWith(['']);
    });

});

