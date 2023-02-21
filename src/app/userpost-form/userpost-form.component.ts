import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userpost-form',
  templateUrl: './userpost-form.component.html',
  styleUrls: ['./userpost-form.component.css']
})
export class UserpostFormComponent implements OnInit {
  postForm:any;
  url = "https://deploystudypalbackend-development.up.railway.app/asked-topic/create-topic"
  postOrEdit = "Post";
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, public dialogRef:MatDialogRef<UserpostFormComponent>){}

  displayFileNames(){
    const displayDiv = document.getElementById('documents') as HTMLDivElement;
    const input = document.getElementById('documentsInput') as HTMLInputElement;
    const files = input.files as FileList;
    displayDiv.innerHTML += `<p> ${files[0].name} </p>`
  }
    onFormSubmit(form: any){
    form.tag = form.tag.split(" ");
     this.http.post(this.url, form, {headers:new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
     (res) => {
        console.log(res)
        this.dialogRef.close()
        window.location.reload()
      }
      )
  }



    
    
  

  ngOnInit(): void {
    if(this.data){
      this.postOrEdit = "Edit";
      const titleInput = document.getElementById("titleInput") as HTMLInputElement;
      titleInput.innerText = this.data.title;
      console.log("issa mee")
      console.log(this.data)

      this.postForm = new FormGroup({
        id: new FormControl(this.data._id),
        title: new FormControl(this.data.title)
      })
    }
    console.log("bruh")
  }
}
