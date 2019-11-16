import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {

  menuSelect: any[] = ['Dashboard', 'Users', 'UI Features',
                       'Buttons', 'Cards', 'Lists', 'Grids',
                       'Expansion Panel', 'Dynamic Menu', 'Mailbox',
                       'Chat', 'Form Controls', 'Autocomplete', 'Checkbox',
                       'Datepicker', 'Form field'];
  constructor() { }

  ngOnInit() {
  }

}
