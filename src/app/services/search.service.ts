import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SearchResponse } from '../models/SearchResponse';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  base_path = 'http://localhost:8080/tracker/search';

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

   // Handle API errors
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

  getTracker(symbol: string): Observable<SearchResponse> {

    return this.http.get<SearchResponse>(this.base_path, {
      params: {
        symbol: symbol
      }
    }).pipe (
      retry(2),
      catchError(this.handleError)
    )

  }


}
