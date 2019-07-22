import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IdentityServerExample';
  isLoaded: boolean = false;
  constructor(readonly oAuthService: OAuthService, readonly router: Router){
    this.configure();
  }

  private configure() {

    let config = new AuthConfig();

    config.issuer = 'https://steyer-identity-server.azurewebsites.net/identity';
    config.clientId = 'spa-demo';
    
    config.scope = 'openid profile email voucher';
    config.redirectUri = window.location.origin + "/index.html";

    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.configure(config);
    this.oAuthService.setupAutomaticSilentRefresh();
    return this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {

        if (this.oAuthService.hasValidIdToken()) {
          this.router.initialNavigation();
          this.isLoaded = true;


        } else {
            this.oAuthService.initImplicitFlow();
        }
    });
}
}
