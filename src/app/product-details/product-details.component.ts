import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../domain/iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  product: IProduct = {name: '', unitPrice: 0};
  idproduct: number;

  constructor(private _productService: ProductsService,
                    private _router: Router, private _route: ActivatedRoute,
                         private _cartService: CartService) { }

  ngOnInit() {
    this.idproduct =  this._route.snapshot.params['id'];

    this._productService.getProductById(this.idproduct).subscribe(
      res => this.product = res,
      err => console.log('Erreur dansla méthode getProductById' )
    );
  }

  addToCart() {

    this._cartService.addToCart(this.product);
    this._router.navigate(['/products']);
  }

}
