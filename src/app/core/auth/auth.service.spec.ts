import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe('Auth Service', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService: UserService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    });
    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(service).toBeTruthy();
    });


    it('Dado um usuário e senha deve autenticar corretamente', fakeAsync(() => {
        const fakebody = {
            id: 1,
            nome: 'Diego',
            email: 'diego@diego.com.br'
        };

        const spy = spyOn(userService, 'setToken').and.returnValue(null);

        service.authenticate('diego', '666').subscribe((response) => {
            expect(response.body).toEqual(fakebody);
            expect(spy).toHaveBeenCalledWith('testToken');
        });
        const request = httpMock.expectOne(req => {
            return req.method === 'POST';
        });

        request.flush(fakebody, {
            headers: { 'x-access-token': 'testToken' }
        });
        tick();
    }));
});
