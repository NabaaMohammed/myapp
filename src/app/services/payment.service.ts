import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) { }

  CreatePayment(body): Observable<any> 
  {
    return this.http.post('http://vjcvvcfwedu', { params: body });
  }

}
