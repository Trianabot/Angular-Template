/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { RouteConstants } from '../../../../constants/route.constants';
import { ToastTypes } from '../../../../constants/toast.types';
import { ToastService } from '../../../../services/toast.service';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent {

    redirectDelay: number = 0;
    showMessages: any = {};
    strategy: string = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;
    rememberMe = false;

    constructor(private loginService: LoginService, private router: Router,
        private ref: ChangeDetectorRef, private toastService: ToastService) {
    }

    login(): void {
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.loginService.login(this.user)._subscribe
        this.loginService.login(this.user).subscribe(data => {
            this.submitted = false;
            // Show toast message
            this.toastService.showToast(ToastTypes.SUCCESS, "Login success", "Loading dashboard.....");
            // Navigate to Dashboard
            this.router.navigateByUrl(RouteConstants.DASHBOARD_ROUTE + "/" + RouteConstants.MANUFACTURER_DASHBOARD_ROUTE);
        }, err => {
            this.submitted = false;
            // call detectChanges(), UI is not updating with value
            this.ref.detectChanges();
            // Show toast message
            this.toastService.showToast(ToastTypes.DANGER, "Wrong Credentials", "Incorrect username or password!");
        });
    }

    // This method is for ngx-admin purpose, don't remove this
    getConfigValue(key: string): any {
        return null;
    }
}
