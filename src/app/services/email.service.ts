import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

 @Injectable()
export class EmailService {

  constructor(private http:HttpClient) { }

  sendMail(user: any){
    return this.http.post('http://localhost:3000/api/sendmail', user);
  }
}

