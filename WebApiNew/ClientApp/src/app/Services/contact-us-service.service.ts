import { Injectable , Inject} from '@angular/core';
import { ContactUs } from './../Model/ContactUsModel';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


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

  constructor(private http: HttpClient) { }

  addContact(formData: NgForm) {

    return this.http.post<any>('api/ContactUs/ContactUsPost/', formData, httpOptions)
      .subscribe(contact => {
        console.log(contact);
      },
        catchError(this.handleErrors('addContact', formData))
      );

  }

  //addContactUs(formData: NgForm) {
  //  return this.http.post<any>('api/ContactUs/ContactUsPost', formData).pipe(
  //    tap(contact => {
  //      JSON.stringify(contact)
  //      //console.log(contact);

  //    }),
  //     catchError(this.handleErrors('getHeroes', []))
  //  );
  //}
}
