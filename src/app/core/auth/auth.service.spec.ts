import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Auth Service', () => {
    let service: AuthService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [AuthService]
        });
        service = TestBed.get(AuthService);
    });
    it('Dado nova instancia o valor não deve ser nulo ou indefinido', () => {
        expect(service).toBeTruthy();
    });
});
