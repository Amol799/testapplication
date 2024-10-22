import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//import * as Cookies from  'js-cookie';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  public token: any | undefined ;
  public jsonData : any | undefined
  constructor(private http: HttpClient) {}


  login(user_name: string, user_pin: string): Observable<any>   {

    let data = {
      username: user_name,
      password: user_pin
    }

    return this.http.post("http://localhost:3000/api/login", data).pipe(
      map(resp => {
        this.isLoggedIn = true;
        this.token = (resp as any).token;
        localStorage.setItem('authtoken', this.token);
        const tokenFromStorage = localStorage.getItem('authtoken');
        return { isLoggedIn: this.isLoggedIn, token: this.token, tokenFromStorage };
      })
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    this.token = null;
    // Remove the token from local storage or session storage
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('authtoken');
    }

  }

  isAuthenticated(): boolean {
    // Check if the token is present in local storage or session storage
    if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('authtoken');
    if (token) {
      this.isLoggedIn = true;
      this.token = token;
    } else {
      this.isLoggedIn = false;
      this.token = null;
    }
  }
    return this.isLoggedIn;
  }

  GetToken(url : any, data : any) : Observable<any>  {
    return this.http.post(url, data)
  }
  // Other methods for user registration, password reset, etc.
}
