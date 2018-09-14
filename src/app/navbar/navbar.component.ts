
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';



@Component({

  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.scss']

})

export class NavbarComponent implements OnInit {

  cartLength = 0;

   constructor(private _service: AuthenticationService, private _cartService: CartService) { }


    ngOnInit() {

      this._cartService.currentCartlengthChanged.subscribe(res => this.cartLength = res);
    }

    isLoggedIn(): boolean {

       return this._service.isLoggedIn();

    }



    getJwtSubjet(): string {

       return this._service.getJwtSubjet();

    }



}
