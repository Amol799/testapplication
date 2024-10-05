import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

 @Injectable()
export class EmailService {


  constructor(private http: HttpClient) {}


  sendEmail(url : any, data : any) {
    return this.http.post(url, data);
  }
}

