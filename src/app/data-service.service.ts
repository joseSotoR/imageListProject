import { Injectable } from '@angular/core';
import { Image } from './models/image';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private basicUrl = 'https://picsum.photos/id/';
  private optionsUrl = '/500/500';


  public composeImage(id): Image {
    const image = new Image();
    image.id = id;
    image.text = this.composeRandomText();
    image.url = this.basicUrl + id + this.optionsUrl;
    return image;

  }

  private composeRandomText(): string {
    const possibleChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    const lengthOfString = 10;
    let text = '';
    for (let i = 0; i < lengthOfString; i++) {
      text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
    }
    return text;
  }


}
