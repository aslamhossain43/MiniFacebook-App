import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileDeleteService {
    constructor(private http: Http) {}

    deleteProfilePhotoById(id: string) {
 return this.http.delete('http://192.168.1.105:8080/zuul-profileStock/delete/profilePhoto/single/' + id);

    }
}
