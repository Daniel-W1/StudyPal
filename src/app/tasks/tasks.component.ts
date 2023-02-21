import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  url: string = "https://deploystudypalbackend-development.up.railway.app/pending-topic/pending-tasks";
  url1: string = "https://deploystudypalbackend-development.up.railway.app/complete-topic/get-completed-topics";
  constructor(private http: HttpClient, private router:Router){}
  pendingTasks:any;
  completedTasks:any;
  ngOnInit():void{
    if (!localStorage.getItem("token")){
      console.log("on in it redirected")

      this.router.navigate(["/Login"])}
      
      this.http.get(this.url, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
        (res) => {
          this.pendingTasks = res;
          console.log("pending: ", this.pendingTasks);
        },
        (error)=>{
          console.log(error)
          this.router.navigate(["/Login"])

      }
    )

    this.http.get(this.url1, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
      (res) => {
        this.completedTasks = res;
        console.log("Completed: ", res);
      },
      (error)=>{
        console.log(error)
        this.router.navigate(["/Login"])

    }
    )
  }
}

