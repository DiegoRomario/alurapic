import { TokenService } from '../token/token.service';
import { UserService } from './user.service';

describe('User Service', () => {
    let service: UserService;
    beforeEach(() => {
        const tokenService = new TokenService();
        service = new UserService(tokenService);
    });

    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(service).toBeTruthy();
    });

    it('Dado um token correto deve retornar dados do usuário', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFsdmFybyIsImVtYWlsIjoiYWx2YXJvQGdtYWlsLmNvbSIsImlhdCI6MTYwNjgxOTIzNSwiZXhwIjoxNjA2OTA1NjM1fQ.GgPqtBsWmW4jrvvUY89yzFbPCwqyufpdYBF9cU7pQrY';
        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe('alvaro');
    });

}
);
