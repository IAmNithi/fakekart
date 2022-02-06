import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pproduct-view',
  templateUrl: './pproduct-view.page.html',
  styleUrls: ['./pproduct-view.page.scss'],
})
export class PproductViewPage implements OnInit {
  products: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.products = JSON.parse(this.router.getCurrentNavigation().extras.state.productDetails).data;
    if(!this.products){
      this.router.navigate(['/home']);
    }
  }

}
