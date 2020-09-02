import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card';
import {PaymentService} from './services/payment.service'
import { from } from 'rxjs';
import { PaymentComponent } from './component/payment/payment.component';
import{AppRoutingModule} from'./app-routing.module' 
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
  AppRoutingModule,
    RouterModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
