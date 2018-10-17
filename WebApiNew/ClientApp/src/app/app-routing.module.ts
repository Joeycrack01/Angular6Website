import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BusinessComponent } from './business/business.component';
import { SportComponent } from './Sport/sport.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutComponent } from './About/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [

  { path: 'Home', component: HomeComponent },
  { path: 'Business', component: BusinessComponent },
  { path: 'Sport', component: SportComponent },
  { path: 'Politics', component: PoliticsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
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
  ContactUsComponent
]
