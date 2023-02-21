import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit{
    applyText:string = "Apply";
    @Input() post:any;
    postId: any;
    applyUrl: string = "https://deploystudypalbackend-development.up.railway.app/asked-topic/apply"


    public userInfo:any;
    constructor(private prof:ProfileServiceService, private http: HttpClient){}


    apply(): void{
      this.http.patch(this.applyUrl, {id: this.post._id}, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
        (res) => {
          console.log(res)
          this.applyText = "Cancel"
          
        },

        (error)=>{
          console.log(error)
          this.applyText = "Cancel"

        }
      )
    }
    ngOnInit(): void {
      this.prof.getPost().subscribe((data) => {
        this.userInfo = data;
      });
    }
    
}
