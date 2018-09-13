import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../domain/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {

    this._productService.getProductsAll().subscribe(res => this.products = res, err => console.log('********* ERROR!!!!!!!!!******'));
  }

}
