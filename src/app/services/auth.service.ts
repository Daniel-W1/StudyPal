import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  readonly rootUrl = "https://jsonplaceholder.typicode.com/posts"
  profiles: Observable<any> | undefined;

  constructor(private http: HttpClient) { }


  getPosts() {


      // let headers = new HttpHeaders().set('Authorization','auth-token')

      this.profiles = this.http.get(this.rootUrl + '/posts')

      return this.profiles
      
      
    // const options = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer ' + ""// here we write the access token
    //   })
    // };

  //   this.http.get('https://localhost3000/auth/login', options).subscribe(response => {
  //     return true;  
  //   },
  //   error => {
  //     return false;
  //   })
  // }


  // isAuthenticated():any{
  //   // logic
  //   const value = this.getSomeData();



  //   return value
}

ngOnInit(): void {
    
}
  
}
