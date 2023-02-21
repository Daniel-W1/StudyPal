import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
interface Banks{
  bankName:string;
}

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  url:string = "https://deploystudypalbackend-development.up.railway.app/payment/withdraw"
  selectedBank:string = ""
  banks:Banks[] = [

    {bankName:"Zemen Bank"},
    {bankName:"Commercial Bank Of Ethiopia (CBE)"},
    {bankName:"Wegagen Bank"},

  ]
  constructor(private http:HttpClient, private dialog:MatDialog){}

  onFormSubmit(form:any){
      console.log(form)

      this.http.post(this.url, form, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
        (res: any) => {
          console.log(res)
          this.dialog.closeAll()
          window.location.reload()
          


  })

}
}
