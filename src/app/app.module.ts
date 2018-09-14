import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Route} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyJwtInterceptor } from './interceptors/my-jwt-interceptor';
import { ProductAddGuard } from './guards/product-add.guard';
import { LogoutService } from './resolvers/logout.service';
import { CartComponent } from './cart/cart.component';


const routes: Route[] = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'add', component: ProductsAddComponent, canActivate: [ProductAddGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: WelcomeComponent, resolve: [LogoutService]},
  { path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ProductsAddComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyJwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
