import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './Components/contactlist/contactlist.component';
import { AdminComponent } from '../Admin/Components/adminComponent/admin.component';
import { AdminRouterModule } from './../Admin/router.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { AdminRouting } from './router.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRouterModule,
    //AdminRouting
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
