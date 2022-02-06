import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pproduct-list',
  templateUrl: './pproduct-list.page.html',
  styleUrls: ['./pproduct-list.page.scss'],
})
export class PproductListPage implements OnInit {
  data: any = [];
  pageType: string = '';
  constructor(private route: ActivatedRoute, private navigateRoute: Router) { }

  ngOnInit() {
    this.pageType = this.route.snapshot.params.id; 
    console.log(this.pageType);
    if(this.pageType === 'mens'){
      this.getData('./assets/staticData/mens.json');
    } else {
      this.getData('./assets/staticData/womens.json');
    }
  }

  getData(url){
    fetch(url).then(res => res.json())
    .then(response => {
      this.data = response;
    })
  }

  fetchProduct(productData) {
    this.navigateRoute.navigate(['/pproduct-view', productData.src], {
      state: {
        productDetails: JSON.stringify({ data: productData })
      }
    });
  }

}
