import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { CategoryModel } from '../Model/CategoryModel';
import { HandleErrorsService } from './handle-errors.service';

const httpOptions = {
  headers: new HttpHeaders({
    //'contevt-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })

export class CategoryServiceService {

  

  constructor(private http: HttpClient, private _handleError: HandleErrorsService) { }

  getCategory(input): Observable<CategoryModel> {
    if (input === 0) {
      return of(this.initializeCategory());
    }
    return this.http.get<CategoryModel>('api/ArticleCategory/GetById/' + input)
      //.
      //pipe(
      //  tap(
      //  ))
  }

  private initializeCategory(): CategoryModel {
    // Return an initialized object
    return {
      id: 0,
      categoryName: ''
    };
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>("api/ArticleCategory/GetCategories/")
      .pipe(
        tap(
          CategoryModel => console.log(CategoryModel)
        ))
  };

  saveCategory(category: CategoryModel): Observable<CategoryModel> {
    //const headers = new HttpHeaders({ //'Content-Type': 'application/json'
    //});
    if (category.id === 0) {
      return this.createCategory(category);
    }
      return this.updateCategory(category);
  }


  private createCategory(category: CategoryModel): Observable<CategoryModel> {
    //category.Id = 0;
    return this.http.post<any>('api/ArticleCategory/CategoryPost/', category)
      .pipe(
        catchError(this._handleError.handleErrors('createCategory', category))
      );
  }

  private updateCategory(category: CategoryModel): Observable<CategoryModel> {

    return this.http.put<any>('api/ArticleCategory/PutCategory/', category, httpOptions)
      .pipe(
        catchError(this._handleError.handleErrors('updateCategory', category))
      );
  }

}
