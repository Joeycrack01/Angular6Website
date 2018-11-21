import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ArticleModel } from './../Model/ArticleModel';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { CategoryModel } from '../Model/CategoryModel';
import { SectionModel } from '../Model/SectionModel';

const httpOptions = {
  headers: new HttpHeaders({
    'contevt-Type': 'application/json'
  })
};


@Injectable({ providedIn: 'root', })

export class ArticleServiceService {

  private handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //private _url: string = "api/Article";

  constructor(private http: HttpClient) { }

  getArticleCat(input): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>("api/Article/GetByCategory" + Input);
  }

  getArticle(input): Observable<ArticleModel> {
    if (input === 0) {
      return of(this.initializeArticle());
    }
    return this.http.get<ArticleModel>('api/Article/GetByArticle/' + input).
      pipe(
        tap(
          ArticleModel => console.log(ArticleModel)
        ))
  }

  private initializeArticle(): ArticleModel {
    // Return an initialized object
    return {
      id: 0,
      articleCategoryID: null,
      author: '',
      sectionID: null,
      CaptionImageUrl: '',
      title: '',
      articleContent: '',
      categoryName: '',
      sectionName: ''
    };
  }

  getArticles() {
    return this.http.get<ArticleModel[]>("api/Article/GetAll/")
  };

  saveArticle(article: ArticleModel): Observable<ArticleModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (article.id === 0) {
      return this.createArticle(article);
    }
    return this.updateArticle(article);
  }


  private createArticle(article: ArticleModel): Observable<ArticleModel> {
    //article.ID = null;
    return this.http.post<ArticleModel>('api/Article/ArticlePost/', article)
      .pipe(
      catchError(this.handleErrors('createArticle', article))
      );  
  }

  private articleUrl = 'api/Article/PutArticle/';

  private updateArticle(article: ArticleModel): Observable<ArticleModel> {
    
    //const url = `${this.articleUrl}/${article.ID}`;
    return this.http.put<any>('api/Article/PutArticle/', article, httpOptions)
      .pipe( 
      catchError(this.handleErrors('updateArticle', article))
      );
  }

  addArticle(formData: NgForm) {

    return this.http.post<any>('api/Article/ArticlePost/', formData, httpOptions)
      .subscribe(article => {
        console.log(article);
      },
        catchError(this.handleErrors('addContact', formData))
      );

  }

}
