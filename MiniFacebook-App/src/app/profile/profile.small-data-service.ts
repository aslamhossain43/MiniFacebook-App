import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SmallData } from './profile.small-data';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SmallDataService {
constructor (private http: Http) {}
// -------------------------------------------------------------------------------------------
addSmallData(smallData: SmallData) {
    const body = JSON.stringify(smallData);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
   return this.http.post('http://localhost:8080/zuul-smalldata-for-friends/friends/smalldata/add', body, options);
}
// --------------------------------------------------------------------------------------------
 // GET ALL SMALL DATA
getAllSmallData(): Observable<SmallData[]> {
    return this.http.get('http://localhost:8080//zuul-smalldata-for-friends/friends/smalldata/getAll')
    .pipe(map((response: Response) => response.json()),
    catchError(this.handlError));
    }
  // --------------------------------------------------------------------------------------------
  public handlError(error: Response) {
    return Observable.throw(error);
  }


}
