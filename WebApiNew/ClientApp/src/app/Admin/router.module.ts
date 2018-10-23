import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from '..//Admin/Components/contactlist/contactlist.component';
import { DashboardComponent } from '..//Admin/Components/dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';



const routes: Routes = [

  { path: '/dashboard', component: DashboardComponent },
  //{ path: 'Business', component: BusinessComponent },
  //{ path: 'Sport', component: SportComponent },
  //{ path: 'Politics', component: PoliticsComponent },
  //{ path: 'About', component: AboutComponent },
  //{ path: 'Contact', component: ContactUsComponent },
  //{ path: 'Contact-List', component: ContactlistComponent },
  //{ path: 'FetchData', component: FetchDataComponent },
  { path: '', component: DashboardComponent, pathMatch: 'full' },

];
//export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRouterModule { }

export const routingComponents = [

  DashboardComponent,
  ]
