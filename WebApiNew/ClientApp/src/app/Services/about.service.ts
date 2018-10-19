import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { ArticleModel } from './../Model/ArticleModel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root', })

export class AboutService {

  params = new HttpHeaders().set('X-CustomHttpHeader', "1");
  //private _url: string = "api/Article/GetByArticle/{0}";


  constructor(private http: HttpClient) { }

  getArticle(input: number): Observable<ArticleModel> {
    return this.http.get<ArticleModel>('api/Article/GetByArticle/' + input)
  }
}
