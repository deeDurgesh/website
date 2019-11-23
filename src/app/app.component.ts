import { Component } from '@angular/core';

const routes = {
  "user": "USER",
  "dynamicMenu":"DYNAMIC MENU",
  "uiMenu":"UI MENU"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  hide = false;
  breadcrumb: string;
  profileContainerOpen = false;

  

  toggleSideNav() {
    this.hide = !this.hide;
  }
 
  closeProfileContainer() {
    this.profileContainerOpen = !this.profileContainerOpen;
  }
}
