import { isLowerCase } from "./lower-case.validator";

describe('Lower Case Validator', () => {
    it('Dado um texto em caixa baixa deve retornar verdadeiro', () => {
        const valor = 'ceni';
        const resultado = isLowerCase(valor);
        console.log(resultado);
        expect(resultado).toBeTruthy();
    });
    it('Dado um texto com primeira letra em caixa alta deve retornar falso', () => {
        expect(isLowerCase('Ceni')).toBeFalsy();
    })
});
