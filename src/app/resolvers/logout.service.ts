import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private authenticationService: AuthenticationService) {}



  resolve() {

    if (localStorage.getItem('currentUser')) {

      this.authenticationService.logout();
    }

  }
}
