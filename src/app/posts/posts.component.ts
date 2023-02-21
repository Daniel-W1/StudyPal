import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  url:string = "https://deploystudypalbackend-development.up.railway.app/asked-topic/all-topics"
  posts: any= []

  constructor(private http:HttpClient , private router:Router){}

  ngOnInit(): void {

      if (!localStorage.getItem("token")){
        this.router.navigate(["/Login"])

      }
      
      this.http.get(this.url,{headers:new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
        (data)=>{
        this.posts = data
        console.log(data)
        console.log(563453645876587)
        // if(data && data.status === 401)
      },
      (error) =>{
        if (error.status === 401){
            this.router.navigate(["/Login"])}
      }
      )
      
  }

}
