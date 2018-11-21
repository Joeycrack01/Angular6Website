import { Route } from '@angular/router';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { adminComponent } from './components/adminComponent/admin.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { ArticleListComponent } from './Components/article-list/article-list.component';
import { ArticleCategoryComponent } from './Components/article-category/article-category.component';
import { ArticleSectionComponent } from './Components/article-section/article-section.component';
import { HomeComponent } from './Components/home/home.component';
import { ArticleEditComponent } from './Components/article-list/article-edit/article-edit.component';
import { ArticleCategoryEditComponent } from './Components/article-category/article-category-edit/article-category-edit.component';
import { SectionEditComponent } from './Components/article-section/article-section-edit/article-section-edit.component';

export const DashRoutes: Route[] = [
  {
    path: 'Admin',
    component: adminComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'dashboard', component: dashboardComponent },
      { path: 'ContactList', component: ContactlistComponent },
      { path: 'ArticleList', component: ArticleListComponent },
      { path: 'ArticleList/:id/articleEdit', component: ArticleEditComponent },
      { path: 'ArticleCategories', component: ArticleCategoryComponent },
      { path: 'ArticleCategories/:id/CategoryEdit', component: ArticleCategoryEditComponent },
      { path: 'ArticleSections', component: ArticleSectionComponent },
      { path: 'ArticleSections/:id/SectionEdit', component: SectionEditComponent },
      { path: '*', redirectTo: 'Home', pathMatch: 'full' }
      
    ]
  }
]
