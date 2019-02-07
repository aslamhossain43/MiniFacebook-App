import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Workplace } from './about.workplace';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class AboutService{
    constructor(private http: Http){}

// WORKPLACE START HERE
saveWorkplace(workplace: Workplace){
    const body = JSON.stringify(workplace);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/zuul-profileAbout/workplace/add', body, options);



}
getWorkplaceByUID(uid: string): Observable<Workplace[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/workplace/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

public handlError(error: Response) {
    return Observable.throw(error);
}




}