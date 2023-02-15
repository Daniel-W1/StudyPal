import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

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
  }

  displayFileNames(){
    const displayDiv = document.getElementById('files') as HTMLDivElement;
    const resumeInput = document.getElementById('resume') as HTMLInputElement;
    const files = resumeInput.files as FileList;
    displayDiv.innerHTML = files[0].name;
  }
  
}
