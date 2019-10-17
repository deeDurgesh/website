import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropServiceService {

  drop1: any[] = [
    { img: "../../../../assets/images/friends.png", value: "Buttons" },
    { img: "../../../../assets/images/friends.png", value: "Cards" },
    { img: "../../../../assets/images/friends.png", value: "Grids" },
    { img: "../../../../assets/images/friends.png", value: "Tabs" },
    { img: "../../../../assets/images/friends.png", value: "Expansion Panel" },
    { img: "../../../../assets/images/friends.png", value: "Chips" },
    { img: "../../../../assets/images/friends.png", value: "Progress" },
    { img: "../../../../assets/images/friends.png", value: "Dialog" }
  ];
  form: any[] = [
    { img: "../../../../assets/images/friends.png", value: "Buttons" },
    { img: "../../../../assets/images/friends.png", value: "Buttons" },
    { img: "../../../../assets/images/friends.png", value: "Buttons" },
    { img: "../../../../assets/images/friends.png", value: "Buttons" },
  ]
  
  constructor() { }
}
