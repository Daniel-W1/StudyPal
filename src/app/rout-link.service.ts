import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutLinkService {

  
  private routeLink: string = "23245ghfgsdjkfgjsk"

  constructor() { }

  public setRouteLink(link: string): void {
    console.log("set route link clicked")
    this.routeLink = link;
  }

  public getRouteLink(): string {
    return this.routeLink;
  }
}
