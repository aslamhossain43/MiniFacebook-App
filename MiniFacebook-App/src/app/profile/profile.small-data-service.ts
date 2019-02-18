import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SmallData } from './profile.small-data';

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



}
