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
<<<<<<< Updated upstream
import { TasksComponent } from './tasks/tasks.component';
import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import { TaskComponent } from './task/task.component';
import {MatChipsModule} from '@angular/material/chips';
import { CompTaskComponent } from './comp-task/comp-task.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
=======
import { MainComponent } from './main/main.component';
import { ScrollMainComponent } from './scroll-main/scroll-main.component';
import { CardComponent } from './card/card.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
<<<<<<< Updated upstream
    TasksComponent,
    TaskComponent,
    CompTaskComponent
=======
    MainComponent,
    ScrollMainComponent,
    CardComponent
>>>>>>> Stashed changes
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
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
    NgxStarRatingModule
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
