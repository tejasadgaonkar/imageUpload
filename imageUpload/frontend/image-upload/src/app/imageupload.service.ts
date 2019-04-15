import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {
  url = 'http://localhost:3001/'
  constructor(private http: HttpClient) { }
  getIds(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'getAllIds')
      .pipe(
        tap(_ => console.log('fetched ids')),
        catchError(this.handleError<any[]>('getHeroes', []))
      );
  }
  deleteImage(id): Observable<{}> {
    const url1 = `${this.url}deleteImage/${id}`;
    console.log(id)
    // DELETE api/heroes/42
    return this.http.get('http://localhost:3001/deleteImage/' + id)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
    /* return this.http.post<any>('http://localhost:3001/deleteImage', id)
      .pipe(
        catchError(this.handleError('deleteImage', id))
      ); */
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
