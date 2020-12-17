import { browser, by, element } from 'protractor';

export class PhotoListPage {
    navegarParaPhotoList() {
        return browser.get('/#/user/flavio');
    }

    buscarImage(comentario) {
        return element(by.className('rounded')).sendKeys(comentario);
    }

    pegarImagem() {
        return element.all(by.css('.no-gutters .col-4')).get(0);
    }
}
