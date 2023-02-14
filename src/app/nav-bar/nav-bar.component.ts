import { Component,OnInit } from '@angular/core';
import { MenuItems } from '../menu-items';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit  {
  menuItems:MenuItems[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile:true,
      showOnTablet:true,
      showOnDesktop:true,
    },
    {
      label: 'Post',
      icon: 'publish',
      showOnMobile:false,
      showOnTablet:false,
      showOnDesktop:true,
    },
    {
      label: 'My Topics',
      icon: 'library_books',
      showOnMobile:false,
      showOnTablet:false,
      showOnDesktop:true,
    },
    {
      label: 'Tasks',
      icon: 'dashboard',
      showOnMobile:false,
      showOnTablet:false,
      showOnDesktop:true,
    },
    {
      label: 'Username',
      icon: 'account_circle',
      showOnMobile:false,
      showOnTablet:true,
      showOnDesktop:true,
    },
    
  ];

  constructor() { }



  ngOnInit(): void {
    
  }
  


}
