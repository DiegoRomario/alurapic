import { isLowerCase } from "./lower-case.validator";

describe('Lower Case Validator', () => {
    it('Dado um texto em caixa baixa deve retornar verdadeiro', () => {
        const valor = 'ceni';
        const resultado = isLowerCase(valor);
        console.log(resultado);
        expect(resultado).toBeTruthy();
    });
});
