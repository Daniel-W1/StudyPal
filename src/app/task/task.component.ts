import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {
  constructor(private http: HttpClient){}
  @Input() task: any;
  url: string = "https://deploystudypalbackend-development.up.railway.app/pending-topic/end-session"

  complete(): void{
    this.http.post(this.url, { topicId: this.task._id  },{headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
 
  
}
