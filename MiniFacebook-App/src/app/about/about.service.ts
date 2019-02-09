import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Workplace } from './about.workplace';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProfessionalSkill } from './about.professionalskill';
import { College } from './about.college';
@Injectable()
export class AboutService{
    constructor(private http: Http){}

// -----------------------------------------------------------------------------------
// WORKPLACE START HERE
saveWorkplace(workplace: Workplace){
    const body = JSON.stringify(workplace);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (workplace.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/workplace/update/' + workplace.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/workplace/add', body, options);
        }
}
  // ------------------------------
getWorkplaceByUID(uid: string): Observable<Workplace[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/workplace/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ---------------------------------
getWorkplaceById(id: string): Observable<Workplace>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/workplace/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// --------------------------------

deleteWorkplaceById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/workplace/single/delete/' + id);

}


// ------------------------------------------------------------------------------------------

// PROFESSIONAL SKILLS START HERE
saveProfessionalSkills(professionalSkill: ProfessionalSkill){
    const body = JSON.stringify(professionalSkill);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (professionalSkill.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/professionalSkills/update/'
             + professionalSkill.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/professionalSkills/add', body, options);
        }



}
// -----------------------------
getProfessionalSkillsByUID(uid: string): Observable<ProfessionalSkill[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/professionalSkills/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getProfessionalSkillsById(id: string): Observable<ProfessionalSkill>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/professionalSkills/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteProfessionalSkillsById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/professionalSkills/single/delete/' + id);

}



// ------------------------------------------------------------------------------------------

// COLLEGE SKILLS START HERE
saveCollege(college: College){
    const body = JSON.stringify(college);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (college.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/college/update/'
             + college.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/college/add', body, options);
        }



}
// -----------------------------
getCollegeByUID(uid: string): Observable<College[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/college/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getCollegeById(id: string): Observable<College>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/college/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteCollegeById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/college/single/delete/' + id);

}


// ----------------------------------------------------------------------------------------
// ERROR HANDLER
public handlError(error: Response) {
    return Observable.throw(error);
}




}