import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup.component';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('Sign Up Component', () => {
    let component: SignUpComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [SignUpService, UserNotTakenValidatorService],
            imports: [
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.changeDetectorRef;

    });

    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(component).toBeTruthy();
    });

});
