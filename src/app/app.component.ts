import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


const routes = {
  "user": "USER",
  "dynamicMenu":"DYNAMIC MENU",
  "uiMenu":"UI MENU"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  hide = false;
  breadcrumb: string;
  profileContainerOpen = false;

  constructor(private location:Location) {}

  toggleSideNav() {
    this.hide = !this.hide;
  }
  getPath(){
    console.log(this.location.path());
  }
  closeProfileContainer() {
    this.profileContainerOpen = !this.profileContainerOpen;
  }
}
