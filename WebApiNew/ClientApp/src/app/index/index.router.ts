import { Route } from '@angular/router';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
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

export const IndexRoutes: Route[] = [

  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Business', component: BusinessComponent },
      { path: 'Sport', component: SportComponent },
      { path: 'Politics', component: PoliticsComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactUsComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'full' }
    ]
  }
];
    
      
