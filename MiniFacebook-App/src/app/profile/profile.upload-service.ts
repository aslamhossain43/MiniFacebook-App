import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileService {
    constructor(private http: Http) {}

    addProfileImage(selectedProfileImage: File, uid: string) {
 const formData: FormData = new FormData();
 formData.append('selectedProfileImage', selectedProfileImage);
 formData.append('uid', uid);
 return this.http.post('http://localhost:8080/zuul-profileStock/profileimageadd', formData);

    }
}
