import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ArticleModel } from './../Model/ArticleModel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root', })

export class ArticleServiceService {

  private _url: string = "api/Article";

  constructor(private http: HttpClient) { }

  getArticleCat(input): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>("api/Article/GetByCategory" + Input);
  }

}
