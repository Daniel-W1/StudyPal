import { Injectable,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService implements OnInit {

  constructor(private http:HttpClient) { }

  url1 = "https://deploystudypalbackend-development.up.railway.app/asked-topic/all-topics"
  url2 = "https://deploystudypalbackend-development.up.railway.app/profile/view-profile"
  

  getPost(): Observable<any>{
    let result: any;
    result = this.http.get(this.url1, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})});
    return result;
  }

  getProfile():Observable<any>{
    let result: any;
    result = this.http.get(this.url2, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})});
    return result;
  }

  ngOnInit(): void {
      
  }

}