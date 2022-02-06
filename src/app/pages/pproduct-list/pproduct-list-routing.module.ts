import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PproductListPage } from './pproduct-list.page';

const routes: Routes = [
  {
    path: '',
    component: PproductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PproductListPageRoutingModule {}
