import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();
        if (descriptionQuery) {
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
        } else {
            return photos;
        }
    }
}

// NO SEGUNDO PARAMETRO DO PIPE É POSSIVEL PASSAR UM ARRAY
// COM VARIOS VALORES PARA SEREM TRATADOS E NÃO SOMENTES TIPOS SIMPLES COMO STRING NESTE CASO
