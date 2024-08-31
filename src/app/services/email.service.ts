import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

 @Injectable()
export class EmailService {


  constructor(private http: HttpClient) {}

  httpGet(url : any) {
    return this.http.get(url);
  }

  httpPost(url :any, {}) {
    return this.http.post(url, { name: "Subrat" });
  }

  sendEmail(url : any, data : any) {
    console.log("email main service called  ");
    return this.http.post(url, data);

  }
}

