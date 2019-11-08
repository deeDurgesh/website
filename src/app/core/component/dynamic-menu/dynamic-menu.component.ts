import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {
  
  menuSelect: any[] = ['Dashboard', 'Users', 'UI Features','Buttons','Cards','Lists','Grids','Expansion Panel','Dynamic Menu','Mailbox','Chat','Form Controls','Autocomplete','Checkbox','Datepicker','Form field'];
 angForm: FormGroup;
 
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {}
  createForm(){
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      
    })
  }

}
