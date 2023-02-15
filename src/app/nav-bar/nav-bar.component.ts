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
      label: 'Posts',
      icon: 'publish',
      showOnMobile:false,
      showOnTablet:false,
      showOnDesktop:true,
    },
    {
      label: 'My Posts',
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
    {
      label:'Login',
      icon:'login',
      showOnMobile:true,
      showOnTablet:true,
      showOnDesktop:true,

    }
    
  ];

  constructor() { }



  ngOnInit(): void {
    
  }
  


}
