import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showSearch = false;
  dragItem = false;
  constructor() { }

  ngOnInit() {
  }

  showSearchBar(){
    this.showSearch = !this.showSearch;
  }
  dragLabel(){
    this.dragItem = !this.dragItem;
  }
}
