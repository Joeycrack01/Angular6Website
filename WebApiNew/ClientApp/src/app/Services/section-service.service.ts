import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SectionModel } from '../Model/SectionModel';
import { HandleErrorsService } from './handle-errors.service';

const httpOptions = {
  headers: new HttpHeaders({
    //'contevt-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class SectionServiceService {

  constructor(private http: HttpClient, private _handleError: HandleErrorsService) { }

  getSection(input): Observable<SectionModel> {
    if (input === 0) {
      return of(this.initializeSection());
    }
    return this.http.get<SectionModel>('api/Section/GetById/' + input)
  }

  private initializeSection(): SectionModel {
    // Return an initialized object
    return {
      id: 0,
      sectionName: ''
    };
  }

  saveSection(section: SectionModel): Observable<SectionModel> {
    if (section.id === 0) {
      return this.createSection(section);
    }
    return this.updateSection(section);
  }

  getSections(): Observable<SectionModel[]> {
    return this.http.get<SectionModel[]>("api/Section/GetSections/")
      .pipe(
        tap(
          SectionModel => console.log(SectionModel)
        ))
  };

  private createSection(section: SectionModel): Observable<SectionModel> {
    //category.Id = 0;
    return this.http.post<any>('api/Section/SectionPost/', section)
      .pipe(
        catchError(this._handleError.handleErrors('createSection', section))
      );

  }

  private updateSection(section: SectionModel): Observable<SectionModel> {

    return this.http.put<any>('api/Section/PutSection/', section, httpOptions)
      .pipe(
        catchError(this._handleError.handleErrors('updateSection', section))
      );
  }



}
