import { TokenService } from './token.service';

describe('Token Service', () => {
    let token;
    let service;
    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(service).toBeTruthy();
    });
    it('Dado um token deve armazenar corretamente', () => {
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe('123');

    });
    it('Solicitado remoção do token deve ser removido corretamente', () => {
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    });

    afterEach(() => {
        localStorage.clear();
    });

    beforeEach(() => {
        token = '123';
        service = new TokenService();
    });
});
