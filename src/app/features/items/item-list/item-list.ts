import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./item-list.css']
})
export class ItemList implements OnInit {

  items: any[] = [];
  searchText: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
  }

}