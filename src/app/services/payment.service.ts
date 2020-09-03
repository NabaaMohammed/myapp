import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{environment} from './../../environments/environment.prod'
@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) { }
  getBaseApi() {

    return environment.baseApiLinkReal;
  }

  CreatePayment(Object): Observable<any> 
  {
    return this.http.post(this.getBaseApi()+'test',Object);
  }

}
