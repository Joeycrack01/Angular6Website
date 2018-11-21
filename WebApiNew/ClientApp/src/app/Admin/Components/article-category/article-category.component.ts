import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../../Services/article-service.service';
import { CategoryModel } from '../../../Model/CategoryModel';
import { CategoryServiceService } from '../../../Services/category-service.service';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.css']
})
export class ArticleCategoryComponent implements OnInit {
  pageTitle = 'Article Categories';
  categories = []

  constructor(private _categoryService: CategoryServiceService) {
    for (let i = 1; i <= 100; i++) {
      this.categories.push(`category ${i}`);
    }
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._categoryService.getCategories()
      .subscribe(result => {
        this.categories = result
      });
  };
}
