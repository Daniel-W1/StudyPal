import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  constructor(private http: HttpClient){}
  url: string = "https://deploystudypalbackend-development.up.railway.app/payment/deposit";
  checkoutUrl: string = "";
  onFormSubmit(form:any){
    console.log(form)
    this.http.post(this.url, form, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
      (res: any) => {
        console.log(res)
        this.checkoutUrl = res.data.checkout_url;
      }
    )
  }
}
