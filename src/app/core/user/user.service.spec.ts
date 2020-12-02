import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('User Service', () => {
    let service: UserService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        service = TestBed.get(UserService);
    });

    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(service).toBeTruthy();
    });

    it('Dado um token correto deve retornar dados do usuário', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNjkxMDIzNSwiZXhwIjoxNjA2OTk2NjM1fQ.UbyT7uX-KEgXqaob1F7mElNeJpF4SIWVYvPZ76CL3o4';
        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        const nomeUsuario = 'flavio';
        expect(service.getUserName()).toBe(nomeUsuario);
        service.getUser().subscribe((user) => {
            expect(user.name).toBe(nomeUsuario);
        });
    });

    it('Ao efetuar logout deve limpar dados do usuário', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNjkxMDIzNSwiZXhwIjoxNjA2OTk2NjM1fQ.UbyT7uX-KEgXqaob1F7mElNeJpF4SIWVYvPZ76CL3o4';
        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBeFalsy();
    });

}
);
