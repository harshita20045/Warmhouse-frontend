import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing-module';
import { ItemList } from './item-list/item-list';

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule {}