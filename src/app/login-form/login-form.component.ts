import { Component ,OnInit} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  hide = true;
  private myUrl = "https://deploystudypalbackend-development.up.railway.app/auth/login"
  constructor(private http:HttpClient, private router:Router){}


     onFormSubmission(form: any){
      // return this.sendAuth(form)
      console.log(form)
      // this.sendAuth(form)
      this.http
      .post<any>(this.myUrl, form).subscribe(
        (res)=>{
        console.log(res)
        localStorage.setItem("token",res.access_token)
        this.router.navigate(["/Posts"])

        
      },

      (error) =>{
        console.log(error)
        localStorage.setItem("token","")
      }
      )
      

    
    }
  }
      
 





  



