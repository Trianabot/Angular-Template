import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { TokenDetailsModel } from '../../../models/tokenDetails.model';
import { TokenResponseModel } from '../../../models/token.response.model';
import { UrlConstants } from '../../../constants/url.constats';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private tokenService: TokenService) { }

    private hostUrl = environment.baseUrl;

    login(data): Observable<string> {
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic dGFwYXNPQXV0aDJDbGllbnRBcHA6MTIzNDU2'
        });

        const body = new URLSearchParams();
        body.set('username', data.email);
        body.set('password', data.password);
        body.set('grant_type', "password");

        const observable = new Observable<string>((observer) => {
            this.http.post(UrlConstants.loginUrl, body.toString(), { headers: httpHeaders }).subscribe((data: TokenResponseModel) => {
                this.tokenService.setToken(data.access_token);
                this.checkToken().subscribe((tokenData: TokenDetailsModel) => {
                    //  console.log("data from login page v_login",data);
                    console.log("tdata from login page v_login", tokenData.authorities[0]);
                    this.tokenService.setRole(tokenData.authorities[0]);
                    observer.next(this.tokenService.getRole());
                    observer.complete();
                });
            }, err => {
                observer.error(err);
                observer.complete();
            });
        });

        return observable;
    }

    logout() {
       this.tokenService.clearSessionStorage();
    }

    checkToken() {
        return this.http.get(UrlConstants.checkTokenUrl + this.tokenService.getToken());
    }
}
