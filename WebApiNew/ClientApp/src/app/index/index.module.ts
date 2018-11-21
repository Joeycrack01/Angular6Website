import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { BusinessComponent } from './business/business.component';
import { SportComponent } from './sport/sport.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './default/index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(IndexRoutes)
  ],
  declarations: [
   
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BusinessComponent,
    SportComponent,
    PoliticsComponent,
    AboutComponent,
    ContactUsComponent,
    IndexComponent
  ]
})
export class IndexModule { }
