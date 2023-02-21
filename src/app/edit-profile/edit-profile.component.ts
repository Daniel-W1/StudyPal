import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  urlProfileEdit:string = "https://deploystudypalbackend-development.up.railway.app/profile/edit-profile"

  constructor(private http:HttpClient){}

  displayNewProfile(){
    const pfpDisplay = document.getElementById("displayImg") as HTMLImageElement;
    const pfpInput = document.getElementById('pfpInput') as HTMLInputElement;
    const files = pfpInput.files as FileList;
    const reader = new FileReader();
    reader.onloadend = () => {
      pfpDisplay.src = reader.result as string;
    }
    reader.readAsDataURL(files[0]);
  }

  onFormSubmit(form: any){
    console.log(form)
    this.http.put(this.urlProfileEdit,form,{headers: new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}`})}).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

  displayFileNames(){
    const displayDiv = document.getElementById('files') as HTMLDivElement;
    const resumeInput = document.getElementById('resume') as HTMLInputElement;
    const files = resumeInput.files as FileList;
    displayDiv.innerHTML = files[0].name;
  }
  
}
