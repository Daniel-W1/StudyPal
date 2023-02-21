import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserpostFormComponent } from '../userpost-form/userpost-form.component';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})

export class MyPostsComponent implements OnInit{

  url:string= "https://deploystudypalbackend-development.up.railway.app/asked-topic/get-my-topics"
  myPosts: any;
  constructor(private dialog: MatDialog, private router:Router,private http:HttpClient){

  }
  showPostForm(){
    this.dialog.open(UserpostFormComponent);
  }

  ngOnInit(): void {
    
    if (!localStorage.getItem("token")){
      this.router.navigate(["/Login"])
  }

   
  this.http.get(this.url,{headers:new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
    (data)=>{
  
    console.log(data);
    console.log(563453645876587);
    this.myPosts = data;
    // if(data && data.status === 401)
  },
  (error) =>{

    
    if (error.status === 401){
        this.router.navigate(["/Login"])}
  }
  )



  }
  
}