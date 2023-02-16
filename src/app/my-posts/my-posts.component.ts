import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserpostFormComponent } from '../userpost-form/userpost-form.component';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {
  constructor(private dialog: MatDialog){
    
  }
  showPostForm(){
    this.dialog.open(UserpostFormComponent);
  }
  
}