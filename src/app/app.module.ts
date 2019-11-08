import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './core/component/side-nav/side-nav.component';
import { HeaderComponent } from './core/component/header/header.component';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
import { DynamicMenuComponent } from './core/component/dynamic-menu/dynamic-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { BreadcrumbComponent } from './core/component/breadcrumb/breadcrumb.component';
import { UserComponent } from './core/component/user/user.component';
import { CommonRoutingComponent } from './core/component/common-routing/common-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    DynamicMenuComponent,
    BreadcrumbComponent,
    UserComponent,
    CommonRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
