import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private dialog: MatDialog){}


  showModal(){
    this.dialog.open(EditProfileComponent);
  }
}
