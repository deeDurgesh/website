import { Component, OnInit, Output } from '@angular/core';
import { DropServiceService } from '../../../services/drop-service.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  subDropdownHidden = true;
  subFormDropdownHidden = true;
  subTableDropdownHidden = true;
  subPageDropdownHidden = true;
  

  drop1: any[] = [
    { img: "../../../../assets/images/black-keyboard-with-white-keys.png", value: "Buttons" },
    { img: "../../../../assets/images/friends.png", value: "Cards" },
    { img: "../../../../assets/images/list.png", value: "List" },
    { img: "../../../../assets/images/grid.png", value: "Grid" },
  ];
  form: any[] = [
    { img: "../../../../assets/images/friends.png", value: "Autocomplete" },
    { img: "../../../../assets/images/check-sign-in-a-rounded-black-square.png", value: "Checkbox" },
    { img: "../../../../assets/images/event.png", value: "Datepicker" },
    { img: "../../../../assets/images/clipboard-with-list.png", value: "Form field" },
  ];
  table: any[] = [
    { img: "../../../../assets/images/friends.png", value: "Basic" },
    { img: "../../../../assets/images/friends.png", value: "Paging" },
    { img: "../../../../assets/images/friends.png", value: "Sorting" },
    { img: "../../../../assets/images/friends.png", value: "Filtering" },
  ];
  page: any[] = [
    { img: "../../../../assets/images/login-square-arrow-button-outline.png", value: "Login" },
    { img: "../../../../assets/images/add-user-to-social-network.png", value: "Register" },
    { img: "../../../../assets/images/blank.png", value: "Blank" },
    { img: "../../../../assets/images/round-error-symbol.png", value: "Page Not Found" },
  ];

  constructor(private dropService: DropServiceService) { }

  ngOnInit() {
  }
  openSubDropdown() {
    this.subDropdownHidden = !this.subDropdownHidden;
  }
  openSubFormDropdown() {
    this.subFormDropdownHidden = !this.subFormDropdownHidden;
  }
  openSubTableDropdown() {
    this.subTableDropdownHidden = !this.subTableDropdownHidden;
  }
  openSubPageDropdown() {
    this.subPageDropdownHidden = !this.subPageDropdownHidden;
  }
  navigate(){

  }
}
