import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplicantProfile } from '../applicant-profile';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient){}
  url: string = "https://deploystudypalbackend-development.up.railway.app/asked-topic/get-applicants"
  url1: string = "https://deploystudypalbackend-development.up.railway.app/asked-topic/accept-applicant"
  applicants: any;


  acceptApplicant(applicantid: string){
    this.http.put(this.url1, {topicId: this.data.id, applicantId: applicantid}, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
  
  ngOnInit(): void {
      this.http.put(this.url, {id: this.data.id}, {headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
        (res) => {
          this.applicants = res;
          console.log(res);
        }
      )}
  }
