import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routes';

import { AppComponent } from './app.component';

import { AdminModule } from '../app/admin/admin.module';
import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing.module';
//import { ContactlistComponent } from './admin/contactlist/contactlist.component';

//import { AppMaterialModule } from './app.material.module';
//import { LayoutModule } from '@angular/cdk/layout';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    IndexModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    
   //LayoutModule,
    //BrowserAnimationsModule,
    //AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
