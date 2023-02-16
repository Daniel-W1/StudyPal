import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserpostFormComponent } from '../userpost-form/userpost-form.component';

@Component({
  selector: 'app-user-post2',
  templateUrl: './user-post2.component.html',
  styleUrls: ['./user-post2.component.css']
})
export class UserPost2Component {
  constructor (private dialog: MatDialog){}
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
    this.dialog.open(UserpostFormComponent)
  }

}
