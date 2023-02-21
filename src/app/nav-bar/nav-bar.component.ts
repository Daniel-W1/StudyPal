import { Component,Input,OnChanges,OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MenuItems } from '../menu-items';
import { ProfileComponent } from '../profile/profile.component';
// import { RoutLinkService } from '../rout-link.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // providers:[ProfileComponent]
})
export class NavBarComponent  {
  
  
  // constructor(private routLinkService:RoutLinkService){
  // }
  
  // goTo:string = this.routLinkService.getRouteLink()


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
      label: 'Profile',
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



  // ngOnInit(): void{
  //   // console.log(this.goTo)
    
  // }
  


}
