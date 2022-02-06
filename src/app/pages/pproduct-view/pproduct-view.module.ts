import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PproductViewPageRoutingModule } from './pproduct-view-routing.module';

import { PproductViewPage } from './pproduct-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PproductViewPageRoutingModule
  ],
  declarations: [PproductViewPage]
})
export class PproductViewPageModule {}
