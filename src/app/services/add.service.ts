import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StockTracker } from '../models/StockTracker';
import { AddResponse } from '../models/AddResponse';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  base_path = 'http://localhost:8080/tracker/add';

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
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
    return throwError(
      'Something bad happened; please try again later.');
  };

  addTracker(stockTracker: StockTracker): Observable<AddResponse> {

    return this.http.post<AddResponse>(this.base_path, stockTracker)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )

  }

}
