import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepositComponent } from '../deposit/deposit.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ProfileServiceService } from '../services/profile-service.service';
import { WithdrawComponent } from '../withdraw/withdraw.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})

export class ProfileComponent implements OnInit  {
  url:string= "https://deploystudypalbackend-development.up.railway.app/profile/view-profile"
  profile:any;
  constructor(private dialog: MatDialog, private http:HttpClient, private router:Router, private prof:ProfileServiceService){}


  showModal(){
    this.dialog.open(EditProfileComponent);
  }

  showDepositForm(){
    this.dialog.open(DepositComponent)
  }
  showWithdrawForm(){
    this.dialog.open(WithdrawComponent)
  }


    ngOnInit(): void {
      if (!localStorage.getItem("token")){
      console.log("on in it redirected")

      this.router.navigate(["/Login"])
    }
    this.prof.getProfile().subscribe(
      (res) => {
        this.profile = res;
        console.log(res)
      },
      (error)=>{
        console.log(error)
        this.router.navigate(["/Login"])

        }
      )
  }
}

