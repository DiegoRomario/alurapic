import { browser } from 'protractor';
import { PhotoFormPage } from './pageObjects/photos/photo-form.po';
import { PhotoListPage } from './pageObjects/photos/photo-list.po';

describe('Testando funcionalidade de Photos', () => {
    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage;
    const comentario = 'Oissssss';
    beforeEach(() => {
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
    });

    it('Deve navegar para /p/add', () => {
        photoFormPage.navegarParaPhotoForm();
    });

    it('Deve cadastrar imagem', () => {
        photoFormPage.carregarImagem();
        photoFormPage.comentarImagem(comentario);
        photoFormPage.pegarBotaoUpload().click();
    });

    it('Busca de imagem', () => {
        photoListPage.navegarParaPhotoList();
        photoListPage.buscarImagem(comentario);
        photoListPage.pegarImagem();

    });
});
