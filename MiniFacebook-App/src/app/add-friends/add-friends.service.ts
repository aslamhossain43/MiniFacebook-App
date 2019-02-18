import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AddFriendsAllInformation } from './add-friends.addfriend-information';
import { AllWorkplaces } from './add-friends.all-workplaces';
import { AllLoginformation } from './add-friends.add-all-loginformation';
@Injectable()
export class AddFriendService{
constructor (private http: Http) {}
// ------------------------------------------------------------------------------------------
getAllWorkplaces(): Observable<AllWorkplaces> {
    return this.http.get('http://localhost:8080/zuul-combination-for-friends/get/workplaces')
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));
}

// ------------------------------------------------------------------------------------------
getAllLoginformation(): Observable<AllLoginformation[]> {
    return this.http.get('http://localhost:8080/zuul-combination-for-friends/get/loginformation')
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));
}

// ------------------------------------------------------------------------------------------
/*getAllAddFriendsInformation(): Observable<AddFriendsAllInformation[]> {
    return this.http.get('http://localhost:8080/zuul-combination-for-friends/get/addFriendInformation')
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));
}
*/
// ----------------------------------------------------------------------------------------
// ERROR HANDLER
public handlError(error: Response) {
    return Observable.throw(error);
}

}