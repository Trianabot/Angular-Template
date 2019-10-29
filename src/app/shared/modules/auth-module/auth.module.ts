import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './components/login/login.component';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { LoginService } from './services/login.service';
import { TokenService } from './services/token.service';
import { ToastService } from '../../services/toast.service';


@NgModule({
    imports: [
        CommonModule,
        NbLayoutModule,
        NbCardModule,
        NbCheckboxModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        RouterModule,
        FormsModule,
        NbIconModule,

        NgxAuthRoutingModule
    ],
    declarations: [
        NgxLoginComponent,
    ],
    providers: [
        LoginService,
        TokenService,
        ToastService
    ],

    exports: [
        NgxLoginComponent
    ]

})
export class NgxAuthModule {

}
