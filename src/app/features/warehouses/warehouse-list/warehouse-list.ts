import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WarehouseService } from '../warehouse';


@Component({
  selector: 'app-warehouse-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './warehouse-list.html',
  styleUrl: './warehouse-list.css',
})
export class WarehouseList implements OnInit {
  warehouses: any[] = [];
  searchText: string = '';

  constructor(private warehouseService:WarehouseService) {
    }
     ngOnInit(): void {
    this.loadWarehouses();
  }
  
  loadWarehouses(){
 
   this.warehouseService.getWarehouses().subscribe(res => {
      this.warehouses = res;
        console.log('Warehouses loaded successfully', this.warehouses);});
  }
}
