import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  public url: string = "";

  getMyPosts(){

  }

  getPosts(){
    
  }
}
