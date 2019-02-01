import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilePhoto } from './profile.photo';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class ProfileGetService {
    constructor(private http: Http) {}

   /* getProfileImage(uid: string): Observable<any> {
 return this.http.get('http://192.168.1.105:8080/getprofilephoto/', uid);

    }*/
    getProfilePhotosAllInformation(uid: string): Observable<ProfilePhoto[]> {
     return this.http.get('http://192.168.1.105:8080/zuul-profileStock/getprofilephotoinformation/' + uid)
     .pipe(map((response: Response) => response.json()),
     catchError(this.handlError));
     }

     public handlError(error: Response) {
        return Observable.throw(error);
    }


}
