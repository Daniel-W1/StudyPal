import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './applicants/applicants.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserpostFormComponent } from './userpost-form/userpost-form.component';

const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  {
    path:"Tasks",
    component:TasksComponent
  },
 
  {
    path:"Username",
    component:ProfileComponent
  },
  {
    path:"Username/edit",
    component:EditProfileComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Home/Login",
    component:LoginFormComponent
  },
  {
    path:"Login",
    component:LoginFormComponent
  },
  {
    path:"Login/signup",
    component:SignUpFormComponent
  },
  {
    path:"Home/Login/signup",
    component:SignUpFormComponent
  },
  {
    path:"My Posts",
    component:MyPostsComponent
  },
  {
    path:"My Posts/editPost",
    component:UserpostFormComponent
  },
  { path:"My Posts/view",
    component:ApplicantsComponent

  },
  {
    path:"Posts",
    component:PostsComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
