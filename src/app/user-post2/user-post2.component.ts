import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserpostFormComponent } from '../userpost-form/userpost-form.component';
import { Input } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApplicantsComponent } from '../applicants/applicants.component';

@Component({
  selector: 'app-user-post2',
  templateUrl: './user-post2.component.html',
  styleUrls: ['./user-post2.component.css']
})
export class UserPost2Component implements OnInit {
  constructor (private dialog: MatDialog, private prof: ProfileServiceService, private router:Router){}
  @Input() post: any;

  userProfile: any;
  srcResult: any;
  resumeResult: any;
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  onFileSelectedFile() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  showEditForm(){
    this.dialog.open(UserpostFormComponent,{
      data: this.post
    }
    )
    console.log("heyyy")
  }
  showApplicants(): void{
    this.dialog.open(ApplicantsComponent,{
      data: { id: this.post._id }
    }
  );
  }

  ngOnInit(): void {
  
}
}
