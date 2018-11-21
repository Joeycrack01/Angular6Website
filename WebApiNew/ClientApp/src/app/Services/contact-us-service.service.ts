import { Injectable , Inject} from '@angular/core';
import { ContactUs, AddressModel } from './../Model/ContactUsModel';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HandleErrorsService } from '../Services/handle-errors.service';


const httpOptions = {
  headers: new HttpHeaders({
    'contevt-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient, private _handleError: HandleErrorsService) { }

  addContact(formData: NgForm) {

    return this.http.post<any>('api/ContactUs/ContactUsPost/', formData, httpOptions)
      .subscribe(contact => {
        console.log(contact);
      },
      catchError(this._handleError.handleErrors('addContact', formData))
      );

  }

  getAddress(input: number): Observable<any> {
    return this.http.get<AddressModel>('api/Address/GetAdress/' + input)
      .pipe(
        catchError(this._handleError.handleErrors('getAddress', input))
        );
  };

  getAllContact(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>('api/ContactUs/GetContactUsList/')
      .pipe(
        tap(
          ContactUs => console.log(ContactUs)
        ))
  };
  

  ViewContact(id: number): Observable<any> {
    const newurl = `${'api/ContactUs/GetContactUsList'}?id=${id}`;
    return this.http.get<ContactUs>(newurl, httpOptions)
      .pipe(
        catchError(this._handleError.handleErrors('ViewContact', id))
      );
  }


















   
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }























}
