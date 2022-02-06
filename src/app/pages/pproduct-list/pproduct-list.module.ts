import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PproductListPageRoutingModule } from './pproduct-list-routing.module';

import { PproductListPage } from './pproduct-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PproductListPageRoutingModule
  ],
  declarations: [PproductListPage]
})
export class PproductListPageModule {}
