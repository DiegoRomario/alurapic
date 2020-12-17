import { browser, by, element } from 'protractor';
const path = require('path');
const image = '../../../../src/assets/img/home.jpg';

export class PhotoFormPage {

    navegarParaPhotoForm() {
        return browser.get('/#/user/flavio');
    }
    carregarImage () {
        const dirImage = path.resolve(__dirname, image);
        element(by.css('input[type=file]')).sendKeys(dirImage);
    }
    pegarBotaoUpload () {
        return element(by.buttonText('Upload'));
    }
}
