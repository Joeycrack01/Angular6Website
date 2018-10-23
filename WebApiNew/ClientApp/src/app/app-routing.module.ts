/// <reference path="admin/admin.module.ts" />
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BusinessComponent } from './business/business.component';
import { SportComponent } from './Sport/sport.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutComponent } from './About/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactlistComponent } from '../app/Admin/Components/contactlist/contactlist.component';



const routes: Routes = [

  { path: 'Home', component: HomeComponent },
  { path: 'Business', component: BusinessComponent },
  { path: 'Sport', component: SportComponent },
  { path: 'Politics', component: PoliticsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: 'Contact-List', component: ContactlistComponent },
  { path: 'FetchData', component: FetchDataComponent },
  { path: 'dashboard', loadChildren: '../app/Admin/admin.module#AdminModule' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
  
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
export const routingComponents = [

  HomeComponent,
  CounterComponent,
  FetchDataComponent,
  BusinessComponent,
  SportComponent,
  PoliticsComponent,
  AboutComponent,
  ContactUsComponent,
  ContactlistComponent
]
