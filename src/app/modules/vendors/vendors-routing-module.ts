import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorList } from './vendor-list/vendor-list';

const routes: Routes = [
  {
    path: '',
    component: VendorList
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
