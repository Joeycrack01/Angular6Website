import { Injectable , Inject} from '@angular/core';
import { ContactUs } from './../Model/ContactUsModel';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient, private contactUs: ContactUs) { }

  addContactUs(formData: NgForm) {
    return this.http.post<any>('api/ContactUs/ContactUsPost', formData)
      .pipe(map(contact => {
        JSON.stringify(contact)

      }))

  }
}
