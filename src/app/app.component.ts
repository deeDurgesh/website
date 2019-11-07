import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';


const routes = {
  "user": "USER",
  "dynamicMenu":"DYNAMIC MENU",
  "uiMenu":"UI MENU"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;
  breadcrumb: string;

  constructor(location: Route) {
    location.
  }

  toggleSideNav() {
    this.hide = !this.hide;
  }
}
