import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Workplace } from './about.workplace';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProfessionalSkill } from './about.professionalskill';
import { College } from './about.college';
import { HighSchool } from './about.highschool';
import { CurrentCity } from './about.currentcity';
import { HomeTown } from './about.hometown';
import { OtherPlacesLived } from './about.otherplaceslived';
import { ContactInformation } from './about.contactinformation';
import { WebSiteAndSocialLink } from './about.websiteandsociallink';
import { BasicInformation } from './about.basicinformation';
import { RelationShip } from './about.relationship';
import { FamilyMembers } from './about.familymembers';
import { FavoriteQuotes } from './about.favoritequotes';
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

// COLLEGE  START HERE
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


// ------------------------------------------------------------------------------------------

// HIGH SCHOOL START HERE
saveHighSchool(highSchool: HighSchool){
    const body = JSON.stringify(highSchool);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (highSchool.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/highSchool/update/'
             + highSchool.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/highSchool/add', body, options);
        }



}
// -----------------------------
getHighSchoolByUID(uid: string): Observable<HighSchool[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/highSchool/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getHighSchoolById(id: string): Observable<HighSchool>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/highSchool/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteHighSchoolById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/highSchool/single/delete/' + id);

}




// ------------------------------------------------------------------------------------------

// CURRENT CITY START HERE
saveCurrentCity(currentCity: CurrentCity){
    const body = JSON.stringify(currentCity);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (currentCity.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/currentCity/update/'
             + currentCity.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/currentCity/add', body, options);
        }



}
// -----------------------------
getCurrentCityByUID(uid: string): Observable<CurrentCity[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/currentCity/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getCurrentCityById(id: string): Observable<CurrentCity>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/currentCity/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteCurrentCityById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/currentCity/single/delete/' + id);

}

// ------------------------------------------------------------------------------------------

// HOME TOWN START HERE
saveHomeTown(homeTown: HomeTown){
    const body = JSON.stringify(homeTown);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (homeTown.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/homeTown/update/'
             + homeTown.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/homeTown/add', body, options);
        }



}
// -----------------------------
getHomeTownByUID(uid: string): Observable<HomeTown[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/homeTown/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getHomeTownById(id: string): Observable<HomeTown>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/homeTown/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteHomeTownById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/homeTown/single/delete/' + id);

}

// ------------------------------------------------------------------------------------------

// Other Places Lived START HERE
saveOtherPlacesLived(otherPlacesLived: OtherPlacesLived){
    const body = JSON.stringify(otherPlacesLived);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (otherPlacesLived.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/otherPlacesLived/update/'
             + otherPlacesLived.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/otherPlacesLived/add', body, options);
        }



}
// -----------------------------
getOtherPlacesLivedByUID(uid: string): Observable<OtherPlacesLived[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/otherPlacesLived/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getOtherPlacesLivedById(id: string): Observable<OtherPlacesLived>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/otherPlacesLived/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteOtherPlacesLivedById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/otherPlacesLived/single/delete/' + id);

}


// ------------------------------------------------------------------------------------------

// ContactInformation START HERE
saveContactInformation(contactInformation: ContactInformation){
    const body = JSON.stringify(contactInformation);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (contactInformation.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/contactInformation/update/'
             + contactInformation.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/contactInformation/add', body, options);
        }



}
// -----------------------------
getContactInformationByUID(uid: string): Observable<ContactInformation[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/contactInformation/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getContactInformationById(id: string): Observable<ContactInformation>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/contactInformation/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteContactInformationById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/contactInformation/single/delete/' + id);

}

// ------------------------------------------------------------------------------------------

// WebSiteAndSocialLink START HERE
saveWebSiteAndSocialLink(webSiteAndSocialLink: WebSiteAndSocialLink){
    const body = JSON.stringify(webSiteAndSocialLink);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (webSiteAndSocialLink.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/webSiteAndSocialLink/update/'
             + webSiteAndSocialLink.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/webSiteAndSocialLink/add', body, options);
        }



}
// -----------------------------
getWebSiteAndSocialLinkByUID(uid: string): Observable<WebSiteAndSocialLink[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/webSiteAndSocialLink/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getWebSiteAndSocialLinkById(id: string): Observable<WebSiteAndSocialLink>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/webSiteAndSocialLink/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteWebSiteAndSocialLinkById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/webSiteAndSocialLink/single/delete/' + id);

}
// ------------------------------------------------------------------------------------------

// BasicInformation START HERE
saveBasicInformation(basicInformation: BasicInformation){
    const body = JSON.stringify(basicInformation);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (basicInformation.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/basicInformation/update/'
             + basicInformation.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/basicInformation/add', body, options);
        }



}
// -----------------------------
getBasicInformationByUID(uid: string): Observable<BasicInformation[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/basicInformation/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getBasicInformationById(id: string): Observable<BasicInformation>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/basicInformation/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteBasicInformationById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/basicInformation/single/delete/' + id);

}
// ------------------------------------------------------------------------------------------

// RelationShip START HERE
saveRelationShip(relationShip: RelationShip){
    const body = JSON.stringify(relationShip);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (relationShip.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/relationShip/update/'
             + relationShip.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/relationShip/add', body, options);
        }



}
// -----------------------------
getRelationShipByUID(uid: string): Observable<RelationShip[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/relationShip/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getRelationShipById(id: string): Observable<RelationShip>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/relationShip/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}

// ---------------------------------
deleteRelationShipById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/relationShip/single/delete/' + id);

}





// ------------------------------------------------------------------------------------------

// FamilyMembers START HERE
saveFamilyMembers(familyMember: FamilyMembers){
    const body = JSON.stringify(familyMember);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (familyMember.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/familyMembers/update/'
             + familyMember.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/familyMembers/add', body, options);
        }



}
// -----------------------------
getFamilyMembersByUID(uid: string): Observable<FamilyMembers[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/familyMembers/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getFamilyMembersById(id: string): Observable<FamilyMembers>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/familyMembers/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
 
// ---------------------------------
deleteFamilyMembersById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/familyMembers/single/delete/' + id);

}







// ------------------------------------------------------------------------------------------

// FavoriteQuotes START HERE
saveFavoriteQuotes(favoriteQuote: FavoriteQuotes){
    const body = JSON.stringify(favoriteQuote);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (favoriteQuote.id) {
            return this.http.put('http://localhost:8080/zuul-profileAbout/favoriteQuotes/update/'
             + favoriteQuote.id, body, options);

        } else {

            return this.http.post('http://localhost:8080/zuul-profileAbout/favoriteQuotes/add', body, options);
        }



}
// -----------------------------
getFavoriteQuotesByUID(uid: string): Observable<FavoriteQuotes[]>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/favoriteQuotes/getAll/' + uid)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
// ------------------------------
getFavoriteQuotesById(id: string): Observable<FavoriteQuotes>{
    return this.http.get('http://localhost:8080/zuul-profileAbout/favoriteQuotes/single/' + id)
    .pipe(map((response: Response) => response.json(),
    catchError(this.handlError)));



}
 
// ---------------------------------
deleteFavoriteQuotesById(id: string) {
    return this.http.delete('http://localhost:8080/zuul-profileAbout/favoriteQuotes/single/delete/' + id);

}








// ----------------------------------------------------------------------------------------
// ERROR HANDLER
public handlError(error: Response) {
    return Observable.throw(error);
}




}