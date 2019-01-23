import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileService {
    constructor(private httpClient: HttpClient) {}

    addProfileImage(selectedProfileImage: File) {
 const formData: FormData = new FormData();
 formData.append('selectedProfileImage', selectedProfileImage);
 return this.httpClient.post('http://localhost:8080/profile/stock/image/addImage', selectedProfileImage);

    }
}
