import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Welcome } from './welcome/welcome';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule,Welcome],
})
export class HomeModule {}
