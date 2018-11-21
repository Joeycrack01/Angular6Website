import { Observable, of } from "rxjs";

export class handleErros {
  
  handleErrors<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  };
}
