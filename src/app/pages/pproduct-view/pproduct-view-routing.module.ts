import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PproductViewPage } from './pproduct-view.page';

const routes: Routes = [
  {
    path: '',
    component: PproductViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PproductViewPageRoutingModule {}
