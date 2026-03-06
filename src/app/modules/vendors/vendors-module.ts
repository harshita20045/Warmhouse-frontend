import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing-module';
import { VendorList } from './vendor-list/vendor-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, VendorsRoutingModule,VendorList],
})
export class VendorsModule {}

