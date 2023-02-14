import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompTaskComponent } from './comp-task/comp-task.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

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
    path:"Home",
    component:HomeComponent
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
