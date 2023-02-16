import { Component } from '@angular/core';

@Component({
  selector: 'app-userpost-form',
  templateUrl: './userpost-form.component.html',
  styleUrls: ['./userpost-form.component.css']
})
export class UserpostFormComponent {

  displayFileNames(){
    const displayDiv = document.getElementById('documents') as HTMLDivElement;
    const input = document.getElementById('documentsInput') as HTMLInputElement;
    const files = input.files as FileList;
    displayDiv.innerHTML += `<p> ${files[0].name} </p>`
  }
  onFormSubmit(form: any){
    console.log(form);
  }
}
