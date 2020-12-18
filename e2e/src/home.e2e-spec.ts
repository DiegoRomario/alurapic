import { browser } from 'protractor';
import { SigninPage } from './pageObjects/home/signin.po';
import { SignUpPage } from './pageObjects/home/signup.po';
import { PhotoFormPage } from './pageObjects/photos/photo-form.po';

describe('Testando tela home', () => {
  let signinPage: SigninPage;
  let signupPage: SignUpPage;
  let teste: PhotoFormPage;
  const informacoesDoUsuario = [
    { nome: 'email', valor: 'diego@diego.com' },
    { nome: 'fullName', valor: 'Di Romário' },
    { nome: 'userName', valor: 'diegoo1211112' },
    { nome: 'password', valor: '12345678' }
  ];
  beforeEach(() => {
    signinPage = new SigninPage();
    signupPage = new SignUpPage();
    teste = new PhotoFormPage();
  });

  // it('Dever navegar para Signup', () => {
  //   signupPage.navegarParaSignUp();
  // });

  // it('Dever cadastrar Usuario', () => {
  //   informacoesDoUsuario.forEach(usuario => {
  //     signupPage.registraUsuario(usuario.nome, usuario.valor);
  //   });
  //   expect(signupPage.pegarBotaoRegister().click());
  //   browser.sleep(5000);
  // });


  // it('Deve verificar url', () => {
  //   expect(signinPage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  // });

  it('Deve verificar url', () => {
    signinPage.acessarHome();
  });

  it('Deve fazer login', () => {
    expect(signinPage.pegarInput('userName', 'flavio'));
    expect(signinPage.pegarInput('password', '123'));
    expect(signinPage.pegarBotaoLogin().click());
  });

});
