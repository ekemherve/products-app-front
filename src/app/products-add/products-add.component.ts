import { Component, OnInit } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {


  product: IProduct = {name: '', unitPrice: 0};

  constructor(private _produitService: ProductsService, private _router: Router) { }

  ngOnInit() {
  }

  addProduct() {

    this._produitService.addProduct(this.product).subscribe(
      res => {
        console.log('Ajout avec succès de l\'objet' +  res );

        // redirige vers la liste des produits
        this._router.navigate(['/products']);
      } );
  }

}
