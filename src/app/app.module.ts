import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { ScrollMainComponent } from './scroll-main/scroll-main.component';
import { MainComponent } from './main/main.component';
import { CompTaskComponent } from './comp-task/comp-task.component';
import { CardComponent } from './card/card.component';
import {MatChipsModule} from '@angular/material/chips';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserpostComponent } from './userpost/userpost.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserPost2Component } from './user-post2/user-post2.component';
import { UserpostFormComponent } from './userpost-form/userpost-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PostsComponent } from './posts/posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TasksComponent,
    TaskComponent,
    ScrollMainComponent,
    MainComponent,
    CompTaskComponent,
    CardComponent,
    FooterComponent,
    NavBarComponent,
    SignUpFormComponent,
    LoginFormComponent,
    UserpostComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserpostComponent,
    UserPost2Component,
    UserpostFormComponent,
    TaskComponent,
    PostsComponent,
    MyPostsComponent,
    EditProfileComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    NgxStarRatingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
