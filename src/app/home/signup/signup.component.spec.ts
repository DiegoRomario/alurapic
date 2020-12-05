import { async, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './signup.component';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

describe('SignUp Component', () => {
    let component: SignUpComponent;
    let router: Router;
    let signupService: SignUpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [SignUpService, UserNotTakenValidatorService],
            imports: [
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents;
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        signupService = TestBed.get(SignUpService);
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('deve ser instanciado', () => {
        expect(component).toBeTruthy();
    });

    it('Dados dados validos deve cadastrar usuário', () => {
        const navigateSpy = spyOn(router, 'navigate');
        spyOn(signupService, 'signUp').and.returnValue(of(null));
        component.signupForm.get('email').setValue('diego@diego.com');
        component.signupForm.get('fullName').setValue('Diego');
        component.signupForm.get('userName').setValue('diego');
        component.signupForm.get('password').setValue('123');
        component.signUp();
        expect(navigateSpy).toHaveBeenCalledWith(['']);
    });

    it('Dados dados invalidos não deve cadastrar usuário', () => {
        spyOn(signupService, 'signUp').and.returnValue(
            throwError('Erro de Servidor')
        );
            component.signupForm.get('email').setValue('diego@diego.com');
            component.signupForm.get('fullName').setValue('Diego');
            component.signupForm.get('userName').setValue('diego');
            component.signupForm.get('password').setValue('123');
        const spyLog = spyOn(console, 'log');
        component.signUp();
        expect(spyLog).toHaveBeenCalledWith('Erro de Servidor');
    });
});
