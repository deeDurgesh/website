import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() sideNavToggle = new EventEmitter<void>();
  @Output() closeContainer = new EventEmitter<void>();
  openSerachBar = true;

  langs: any = [
    {title: "English", img:"../../../../assets/images/united-kingdom.png", value: "united-kingdom"},
    {title:"German", img: "../../../../assets/images/germany.png", value:"german"},
    {title:"French",img:"../../../../assets/images/france.png", value:"france"}
  ]
  constructor() { }

  toggleNav() {
    this.sideNavToggle.emit();
  }
  searchBar(){
    this.openSerachBar = !this.openSerachBar;
  }
  closeProfileContainer(){
    this.closeContainer.emit();
  }
}
