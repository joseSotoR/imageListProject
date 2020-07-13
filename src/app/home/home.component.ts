import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';


import { isPlatformBrowser } from '@angular/common';


import { DataServiceService } from '../data-service.service';
import { Image } from '../models/image';
import { ItemFilter } from '../models/itemFilter';
import { ITEMSFILTER } from '../radioData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  images = [];
  searchTerm: string;
  filterTerm: string;
  randomText: any;

  radioSel: any;
  radioSelected: string;
  public radioSelectedString: string;
  itemList: ItemFilter[] = ITEMSFILTER;

  constructor(
    private dataService: DataServiceService
  ) {
    this.itemList = ITEMSFILTER;
    this.radioSelected = "filterById";
    this.getSelectedItem();
  }

  ngOnInit(): void {
    this.reloadData();
    this.getSelectedItem()
    
  }

  getSelectedItem() {
    this.radioSel = ITEMSFILTER.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = this.radioSel.value;
    this.filterTerm = this.radioSelectedString
  }

  onItemChange(item) {
    
    this.getSelectedItem()
  }


  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


  reloadData() {

    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-";
    const lengthOfCode = 10;
    
    for (let i = 1; i <= 4000; i++) {
        var image = new Image;

        image.id = i;
        image.url = "https://picsum.photos/id/" + i + "/500/500";
        image.text = this.makeRandom(lengthOfCode, possible);

        this.images.push(image)
    }
    
  }

}
