import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileDeleteService {
    constructor(private http: Http) {}

    deleteProfilePhotoById(id: string) {
 return this.http.delete('http://localhost:8080/zuul-profileStock/delete/profilePhoto/single/' + id);

    }
}
