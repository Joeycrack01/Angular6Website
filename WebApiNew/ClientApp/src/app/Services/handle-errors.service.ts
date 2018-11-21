import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HandleErrorsService {

  constructor(private toastr: ToastrService) { }

  handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.error.message)
      this.errror = error.error.message;
      this.showError();
      return of(result as T);
      
    };
  };

  public errror: string;

  showError() {
    this.toastr.error(`${this.errror}`, 'Error', {
      timeOut: 3000
    });
  }

}
