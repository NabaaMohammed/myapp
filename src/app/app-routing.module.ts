import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './component/payment/payment.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'add', component: AddPaymentComponent },


];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
