import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleModel } from '../../../Model/ArticleModel';
import { ArticleServiceService } from '../../../Services/article-service.service';
import { catchError, merge } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  pageTitle = 'Article List';
  public articles = [];
  article: ArticleModel;
  //private currentPageNum = 1;
  //private perPage = 40;
  
  constructor(private _articleService: ArticleServiceService) {
    for (let i = 1; i <= 100; i++) {
      this.articles.push(`article ${i}`);
    }
  }

  ngOnInit() {
    this.loadArticles();

  }

  loadArticles() {
    this._articleService.getArticles()
      .subscribe(data => {
        this.articles = data;
        console.log(this.articles);
      });
  };

 
}

