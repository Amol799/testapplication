import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  public token: any | undefined ;
  public jsonData : any | undefined
  constructor(private http: HttpClient) {}


  login(user_name: string, user_pin: string): boolean  {

    let data = {
      username: user_name,
      password: user_pin
    }
    this.http.post("http://localhost:3000/api/login", data).subscribe(
      resp => {
        this.isLoggedIn = true;
         this.token = (resp as any).token;
        localStorage.setItem('authtoken', this.token);
      },
      err => {
        console.log(err);
      }
    );
    return this.isLoggedIn;
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