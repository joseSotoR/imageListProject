import { PipeTransform, Pipe } from '@angular/core';
import { Image } from '../models/image';
import { HomeComponent } from '../home/home.component';

@Pipe({
  name: 'imageFilter'
})

export class ImageSearcherPipe implements PipeTransform {



  transform(images: Image[], searchTerm: string, filterTerm: string): Image[] {
    if (!images || !searchTerm) {
      return images;
    }
    if (filterTerm === 'filterByText') {
      return images.filter(image => image.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    } else {
      return images.filter(image => image.id === +searchTerm);
    }
  }
}
