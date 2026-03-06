import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing-module';
import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [CommonModule, CategoriesRoutingModule,FormsModule],
})
export class CategoriesModule {}
