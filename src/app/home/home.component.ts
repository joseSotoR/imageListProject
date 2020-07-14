import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public images = [];
  public searchTerm: string;
  public filterTerm: string;

  private radioSel: any;
  private radioSelected: string;
  public radioSelectedString: string;

  public itemList = [
    {
      name: 'By ID',
      value: 'filterById'
    },
    {
      name: 'By Text',
      value: 'filterByText'
    }
  ];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.radioSelected = 'filterById';
    this.reloadData();
    this.getSelectedItem();
  }

  private getSelectedItem(): void {
    this.radioSel = this.itemList.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = this.radioSel.value;
    this.filterTerm = this.radioSelectedString;
  }

  private onItemChange(item): void {
    this.getSelectedItem();
  }

  private reloadData(): void {
    for (let i = 1; i <= 4000; i++) {
      const image = this.dataService.composeImage(i);
      this.images.push(image);
    }
  }
}
