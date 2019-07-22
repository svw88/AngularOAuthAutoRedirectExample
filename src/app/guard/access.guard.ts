import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AccessTokenGuard implements CanActivate {
    constructor(
        public oAuth: OAuthService) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
      
        return this.oAuth.hasValidAccessToken();

    }
}
