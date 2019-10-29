import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly token_name = "access_token";
  readonly role_name = "role";

  constructor() { }

  getToken(): string {
    return sessionStorage.getItem(this.token_name)
  }

  setToken(token: string): void {
    return sessionStorage.setItem(this.token_name, token);

  }

  getRole(): string {
    return sessionStorage.getItem(this.role_name)
  }

  setRole(role: string): void {
    return sessionStorage.setItem(this.role_name, role);
  }

  clearSessionStorage(): void {
    // clear session storage
    sessionStorage.clear();
  }

}
