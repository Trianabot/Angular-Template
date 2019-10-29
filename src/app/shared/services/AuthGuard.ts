import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../modules/auth-module/services/token.service';
import { RouterConstants } from '../constants/router.constats';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) { }


    canActivate() {
        if (this.tokenService.getToken()) {
            return true;
        }

        this.router.navigate([RouterConstants.LOGIN_ROUTE]);
        return false;
    }
}
