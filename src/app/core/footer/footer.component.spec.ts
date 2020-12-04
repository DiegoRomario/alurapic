import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [UserService],
            declarations: [FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {


        const userService = TestBed.get(UserService);

        spyOn(userService, 'getUser').and.returnValue(of({
            email: 'diego@diego.com.br',
            name: 'Diego',
            id: 1
        }));


        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
            expect(component).toBeTruthy();
        });

    });
});
