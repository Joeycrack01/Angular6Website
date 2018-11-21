import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { adminComponent } from '../admin/components/adminComponent/admin.component';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashRoutes } from './dash.router';
import { ArticleListComponent } from './Components/article-list/article-list.component';
import { ArticleCategoryComponent } from './Components/article-category/article-category.component';
import { ArticleSectionComponent } from './Components/article-section/article-section.component';
import { HomeComponent } from './Components/home/home.component';
import { ArticleEditComponent } from './Components/article-list/article-edit/article-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleCategoryEditComponent } from './Components/article-category/article-category-edit/article-category-edit.component';
import { SectionEditComponent } from './Components/article-section/article-section-edit/article-section-edit.component';
import { MatIconModule, MatSortModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

//import { AdminRouting } from './router.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    RouterModule.forChild(DashRoutes)

  ],
  declarations: [
    adminComponent,
    dashboardComponent,
    ContactlistComponent,
    ArticleListComponent,
    ArticleCategoryComponent,
    ArticleSectionComponent,
    HomeComponent,
    ArticleEditComponent,
    ArticleCategoryEditComponent,
    SectionEditComponent
  ]
})
export class AdminModule { }
