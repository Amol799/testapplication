

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { CarouselModel } from '../model/carousselmodel';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        //  console.log(data);
      });
  }

  public getJSON(): Observable<any> {
      return this.http.get("./assets/jsondata/products.data.json");
  }
}
