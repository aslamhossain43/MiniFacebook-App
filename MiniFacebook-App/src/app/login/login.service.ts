import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginInformation } from './login.loginformation';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    // ------------------------------------------------------------------------------------------

    saveLoginInformation(loginInformation: LoginInformation) {
        const body = JSON.stringify(loginInformation);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });


        return this.http.post('http://localhost:8080/zuul-logInformation/add/information', body, options);




    }


}