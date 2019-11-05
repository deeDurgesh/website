import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
import { UserComponent } from './core/component/user/user.component';
import { DynamicMenuComponent } from './core/component/dynamic-menu/dynamic-menu.component';


const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"user", component:UserComponent},
  {path:"dynamicMenu", component:DynamicMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
