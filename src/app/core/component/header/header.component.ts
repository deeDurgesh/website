import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() sideNavToggle = new EventEmitter<void>();
  @Output() closeContainer = new EventEmitter<void>();
  openSerachBar = true;
  langBlock = true;
  langs: any = [
    {title: "English", img:"../../../../assets/images/united-kingdom.png", value: "en"},
    {title:"German", img: "../../../../assets/images/germany.png", value:"de"},
    {title:"French",img:"../../../../assets/images/france.png", value:"fr"}
  ]

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de|fr/) ? browserLang : 'en');
  }

  toggleNav() {
    this.sideNavToggle.emit();
  }
  searchBar(){
    this.openSerachBar = !this.openSerachBar;
  }
  closeProfileContainer(){
    this.closeContainer.emit();
  }
  openLangBlock(){
    this.langBlock = !this.langBlock;
  }
  langSelect(lang){
    this.translate.use(lang);
  }
}
