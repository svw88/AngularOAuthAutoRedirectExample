import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(readonly oAuthService: OAuthService) {
   
    
  }

  logout(){
    this.oAuthService.logOut();
  }

}
