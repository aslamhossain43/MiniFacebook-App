import { Component, OnInit, TemplateRef } from '@angular/core';
import { Workplace } from './about.workplace';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AboutService } from './about.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Response } from '@angular/http';
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
import { LoginService } from '../login/login.service';
import { LoginInformation } from '../login/login.loginformation';
import { SmallData } from '../profile/profile.small-data';
import { SmallDataService } from '../profile/profile.small-data-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();
  // ------------------------------------------------------------------------------------
  uid: string;
   // --------------------------------------------------------------------------------
   public modalRef: BsModalRef;
   // --------------------------------------------------------------------------------------
   smallData = new SmallData();
   // --------------------------------------------------------------------------------
workplace = new Workplace();
workplaces: Workplace[];
// ------------------------------------------------------------------------------------
professionalSkill = new ProfessionalSkill();
professionalSkills: ProfessionalSkill[];
// ------------------------------------------------------------------------------------
college = new College();
colleges: College[];
// ------------------------------------------------------------------------------------
highSchool = new HighSchool();
highSchools: HighSchool[];
// ------------------------------------------------------------------------------------
currentCity = new CurrentCity();
currentCities: CurrentCity[];
// ------------------------------------------------------------------------------------
homeTown = new HomeTown();
homeTowns: HomeTown[];
// ------------------------------------------------------------------------------------
otherPlacesLived = new OtherPlacesLived();
otherPlacesLiveds: OtherPlacesLived[];
// --------------------------------------------------------------------------------------
contactInformation = new ContactInformation();
contactInformations: ContactInformation[];
// -------------------------------------------------------------------------------------
webSiteAndSocialLink = new WebSiteAndSocialLink();
webSiteAndSocialLinks: WebSiteAndSocialLink[];
// -------------------------------------------------------------------------------------
basicInformation = new BasicInformation();
basicInformations: BasicInformation[];
// -------------------------------------------------------------------------------------
relationShip = new RelationShip();
relationShips: RelationShip[];
// ------------------------------------------------------------------------------------
familyMember = new FamilyMembers();
familyMembers: FamilyMembers[];
// ----------------------------------------------------------------------------------
  favoriteQuote = new FavoriteQuotes();
  favoriteQuotes: FavoriteQuotes[];
// ------------------------------------------------------------------------------------
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private aboutService: AboutService,
    private af: AngularFireAuth, private logService: LoginService, 
    private smallDataService: SmallDataService) { 
      this.af.authState.subscribe(auth => {
        this.uid = auth.uid;
        // -------------------
        this.smallData.uid = auth.uid;
        // --------------------
        this.getWorkplaceByUID();
        this.getProfessionalSkillsByUID();
        this.getCollegeByUID();
        this.getHighSchoolByUID();
        this.getCurrentCityByUID();
        this.getHomeTownByUID();
        this.getOtherPlacesLivedByUID();
        this.getContactInformationByUID();
        this.getWebSiteAndSocialLinkByUID();
        this.getBasicInformationByUID();
        this.getRelationShipByUID();
        this.getFamilyMembersByUID();
        this.getFavoriteQuotesByUID();
      });
      // ----------------------------------
      this.af.authState.subscribe(auth => {

        this.loginInformation.uid = auth.uid;
        if (auth.displayName) {
          this.loginInformation.userName = auth.displayName;
        } else {
          this.loginInformation.email = auth.email;
        }
        this.loginInformation.photoUrl = auth.photoURL;
      });
    }
    // ----------------------------------------------------------------------------------
 // FOR NGX BOOTSTRAP  MODAL
 public openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
}
// --------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.addLoginInformation();
// ------------------------------
    this.getWorkplaceByUID();
   this.getProfessionalSkillsByUID();
   this.getCollegeByUID();
   this.getHighSchoolByUID();
   this.getCurrentCityByUID();
   this.getHomeTownByUID();
   this.getOtherPlacesLivedByUID();
   this.getContactInformationByUID();
   this.getWebSiteAndSocialLinkByUID();
   this.getBasicInformationByUID();
   this.getRelationShipByUID();
   this.getFamilyMembersByUID();
   this.getFavoriteQuotesByUID();
  }

// ---------------------------------------------------------------------------------------
// WORKPLACE ALL METHODS ARE HERE
saveWorkplace(): void {
this.workplace.uid = this.uid;
// ---------------------------
this.smallData.workPlace = this.workplace.workPlace;
this.addSmallData();
// ---------------------------
  this.aboutService.saveWorkplace(this.workplace)
  .subscribe(response => {
this.getWorkplaceByUID();
this.getProfessionalSkillsByUID();
this.getCollegeByUID();
this.getHighSchoolByUID();
this.getCurrentCityByUID();
this.getHomeTownByUID();
this.getOtherPlacesLivedByUID();
this.getContactInformationByUID();
this.getWebSiteAndSocialLinkByUID();
this.getBasicInformationByUID();
this.getRelationShipByUID();
this.getFamilyMembersByUID();
this.getFavoriteQuotesByUID();
}, (error) => {

});
}
// ----------------------
workplaceRefresh() {
  this.workplace.id = null;
  this.workplace.workPlace = null;
}
// ----------------------
getWorkplaceByUID(): void {
this.aboutService.getWorkplaceByUID(this.uid)
.subscribe((workplace) => {
  this.workplaces = workplace;
});
}
// -----------------------------
getWorkplaceById(id: string): void {
  this.aboutService.getWorkplaceById(id)
  .subscribe((workplace) => {
    this.workplace = workplace;
  });
}
// -----------------------------------
deleteWorkplaceById(id: string): void {
  this.aboutService.deleteWorkplaceById(id)
  .subscribe((response: Response) => {
    this.getWorkplaceByUID();
    this.getProfessionalSkillsByUID();
    this.getCollegeByUID();
    this.getHighSchoolByUID();
    this.getCurrentCityByUID();
    this.getHomeTownByUID();
    this.getOtherPlacesLivedByUID();
    this.getContactInformationByUID();
    this.getWebSiteAndSocialLinkByUID();
    this.getBasicInformationByUID();
    this.getRelationShipByUID();
    this.getFamilyMembersByUID();
    this.getFavoriteQuotesByUID();
  }, (error) => {

  });
}




// -----------------------------------------------------------------------------------------

// PROFESSIONAL SKILLS ALL METHODS ARE HERE
saveProfessionalSkills(): void {
  this.professionalSkill.uid = this.uid;
  // ---------------------------
this.smallData.professionalSkill = this.professionalSkill.professionalSkill;
this.addSmallData();
    this.aboutService.saveProfessionalSkills(this.professionalSkill)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  ProfessionalSkillsRefresh() {
    this.professionalSkill.id = null;
    this.professionalSkill.professionalSkill = null;
  }
// -------------------------------
  getProfessionalSkillsByUID(): void {
  this.aboutService.getProfessionalSkillsByUID(this.uid)
  .subscribe((professionalSkills) => {
    this.professionalSkills = professionalSkills;
  });
  }
  // -------------------------------
  getProfessionalSkillsById(id: string): void {
    this.aboutService.getProfessionalSkillsById(id)
    .subscribe((professionalSkills) => {
      this.professionalSkill = professionalSkills;
    });
  }
  // --------------------------------
  deleteProfessionalSkillsById(id: string): void {
    this.aboutService.deleteProfessionalSkillsById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }
  // -----------------------------------------------------------------------------------------

// COLLEGE ALL METHODS ARE HERE
saveCollege(): void {
  this.college.uid = this.uid;
  // ---------------------------
this.smallData.college = this.college.college;
this.addSmallData();
    this.aboutService.saveCollege(this.college)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  CollegeRefresh() {
    this.college.id = null;
    this.college.college = null;
  }
// -------------------------------
  getCollegeByUID(): void {
  this.aboutService.getCollegeByUID(this.uid)
  .subscribe((college) => {
    this.colleges = college;
  });
  }
  // -------------------------------
  getCollegeById(id: string): void {
    this.aboutService.getCollegeById(id)
    .subscribe((college) => {
      this.college = college;
    });
  }
  // --------------------------------
  deleteCollegeById(id: string): void {
    this.aboutService.deleteCollegeById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }



 // -----------------------------------------------------------------------------------------

// HIGH SCHOOL ALL METHODS ARE HERE
saveHighSchool(): void {
  this.highSchool.uid = this.uid;
  // ---------------------------
this.smallData.highSchool = this.highSchool.highSchool;
this.addSmallData();
    this.aboutService.saveHighSchool(this.highSchool)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  HighSchoolRefresh() {
    this.highSchool.id = null;
    this.highSchool.highSchool = null;
  }
// -------------------------------
  getHighSchoolByUID(): void {
  this.aboutService.getHighSchoolByUID(this.uid)
  .subscribe((highSchool) => {
    this.highSchools = highSchool;
  });
  }
  // -------------------------------
  getHighSchoolById(id: string): void {
    this.aboutService.getHighSchoolById(id)
    .subscribe((highSchool) => {
      this.highSchool = highSchool;
    });
  }
  // --------------------------------
  deleteHighSchoolById(id: string): void {
    this.aboutService.deleteHighSchoolById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// CURRENT CITY ALL METHODS ARE HERE
saveCurrentCity(): void {
  this.currentCity.uid = this.uid;
  // ---------------------------
this.smallData.currentCity = this.currentCity.currentCity;
this.addSmallData();
    this.aboutService.saveCurrentCity(this.currentCity)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  CurrentCityRefresh() {
    this.currentCity.id = null;
    this.currentCity.currentCity = null;
  }
// -------------------------------
  getCurrentCityByUID(): void {
  this.aboutService.getCurrentCityByUID(this.uid)
  .subscribe((currentCity) => {
    this.currentCities = currentCity;
  });
  }
  // -------------------------------
  getCurrentCityById(id: string): void {
    this.aboutService.getCurrentCityById(id)
    .subscribe((currentCity) => {
      this.currentCity = currentCity;
    });
  }
  // --------------------------------
  deleteCurrentCityById(id: string): void {
    this.aboutService.deleteCurrentCityById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// HOME TOWN ALL METHODS ARE HERE
saveHomeTown(): void {
  this.homeTown.uid = this.uid;
  // ---------------------------
this.smallData.homeTown = this.homeTown.homeTown;
this.addSmallData();
    this.aboutService.saveHomeTown(this.homeTown)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  HomeTownRefresh() {
    this.homeTown.id = null;
    this.homeTown.homeTown = null;
  }
// -------------------------------
  getHomeTownByUID(): void {
  this.aboutService.getHomeTownByUID(this.uid)
  .subscribe((homeTown) => {
    this.homeTowns = homeTown;
  });
  }
  // -------------------------------
  getHomeTownById(id: string): void {
    this.aboutService.getHomeTownById(id)
    .subscribe((homeTown) => {
      this.homeTown = homeTown;
    });
  }
  // --------------------------------
  deleteHomeTownById(id: string): void {
    this.aboutService.deleteHomeTownById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// OTHER PLACES LIVED ALL METHODS ARE HERE
saveOtherPlacesLived(): void {
  this.otherPlacesLived.uid = this.uid;
  // ---------------------------
this.smallData.otherPlacesLived = this.otherPlacesLived.otherPlacesLived;
this.addSmallData();
    this.aboutService.saveOtherPlacesLived(this.otherPlacesLived)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  OtherPlacesLivedRefresh() {
    this.otherPlacesLived.id = null;
    this.otherPlacesLived.otherPlacesLived = null;
  }
// -------------------------------
  getOtherPlacesLivedByUID(): void {
  this.aboutService.getOtherPlacesLivedByUID(this.uid)
  .subscribe((otherPlacesLived) => {
    this.otherPlacesLiveds = otherPlacesLived;
  });
  }
  // -------------------------------
  getOtherPlacesLivedById(id: string): void {
    this.aboutService.getOtherPlacesLivedById(id)
    .subscribe((otherPlacesLived) => {
      this.otherPlacesLived = otherPlacesLived;
    });
  }
  // --------------------------------
  deleteOtherPlacesLivedById(id: string): void {
    this.aboutService.deleteOtherPlacesLivedById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// CONTACT INFORMATION ALL METHODS ARE HERE
saveContactInformation(): void {
  this.contactInformation.uid = this.uid;
  // ---------------------------
this.smallData.contactInformation = this.contactInformation.contactInformation;
this.addSmallData();
    this.aboutService.saveContactInformation(this.contactInformation)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  ContactInformationRefresh() {
    this.contactInformation.id = null;
    this.contactInformation.contactInformation = null;
  }
// -------------------------------
  getContactInformationByUID(): void {
  this.aboutService.getContactInformationByUID(this.uid)
  .subscribe((contactInformation) => {
    this.contactInformations = contactInformation;
  });
  }
  // -------------------------------
  getContactInformationById(id: string): void {
    this.aboutService.getContactInformationById(id)
    .subscribe((contactInformation) => {
      this.contactInformation = contactInformation;
    });
  }
  // --------------------------------
  deleteContactInformationById(id: string): void {
    this.aboutService.deleteContactInformationById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// WEB SITE AND SOCIAL LINK ALL METHODS ARE HERE
saveWebSiteAndSocialLink(): void {
  this.webSiteAndSocialLink.uid = this.uid;
  // ---------------------------
this.smallData.webSiteAndSocialLink = this.webSiteAndSocialLink.webSiteAndSocialLink;
this.addSmallData();
    this.aboutService.saveWebSiteAndSocialLink(this.webSiteAndSocialLink)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  WebSiteAndSocialLinkRefresh() {
    this.webSiteAndSocialLink.id = null;
    this.webSiteAndSocialLink.webSiteAndSocialLink = null;
  }
// -------------------------------
  getWebSiteAndSocialLinkByUID(): void {
  this.aboutService.getWebSiteAndSocialLinkByUID(this.uid)
  .subscribe((webSiteAndSocialLink) => {
    this.webSiteAndSocialLinks = webSiteAndSocialLink;
  });
  }
  // -------------------------------
  getWebSiteAndSocialLinkById(id: string): void {
    this.aboutService.getWebSiteAndSocialLinkById(id)
    .subscribe((webSiteAndSocialLink) => {
      this.webSiteAndSocialLink = webSiteAndSocialLink;
    });
  }
  // --------------------------------
  deleteWebSiteAndSocialLinkById(id: string): void {
    this.aboutService.deleteWebSiteAndSocialLinkById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }


 // -----------------------------------------------------------------------------------------

// BasicInformation ALL METHODS ARE HERE
saveBasicInformation(): void {
  this.basicInformation.uid = this.uid;
  // ---------------------------
this.smallData.basicInformation = this.basicInformation.basicInformation;
this.addSmallData();
    this.aboutService.saveBasicInformation(this.basicInformation)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  BasicInformationRefresh() {
    this.basicInformation.id = null;
    this.basicInformation.basicInformation = null;
  }
// -------------------------------
  getBasicInformationByUID(): void {
  this.aboutService.getBasicInformationByUID(this.uid)
  .subscribe((basicInformation) => {
    this.basicInformations = basicInformation;
  });
  }
  // -------------------------------
  getBasicInformationById(id: string): void {
    this.aboutService.getBasicInformationById(id)
    .subscribe((basicInformation) => {
      this.basicInformation = basicInformation;
    });
  }
  // --------------------------------
  deleteBasicInformationById(id: string): void {
    this.aboutService.deleteBasicInformationById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// RelationShip ALL METHODS ARE HERE
saveRelationShip(): void {
  this.relationShip.uid = this.uid;
  // ---------------------------
this.smallData.relationShip = this.relationShip.relationShip;
this.addSmallData();
    this.aboutService.saveRelationShip(this.relationShip)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  RelationShipRefresh() {
    this.relationShip.id = null;
    this.relationShip.relationShip = null;
  }
// -------------------------------
  getRelationShipByUID(): void {
  this.aboutService.getRelationShipByUID(this.uid)
  .subscribe((relationShip) => {
    this.relationShips = relationShip;
  });
  }
  // -------------------------------
  getRelationShipById(id: string): void {
    this.aboutService.getRelationShipById(id)
    .subscribe((relationShip) => {
      this.relationShip = relationShip;
    });
  }
  // --------------------------------
  deleteRelationShipById(id: string): void {
    this.aboutService.deleteRelationShipById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// FamilyMembers ALL METHODS ARE HERE
saveFamilyMembers(): void {
  this.familyMember.uid = this.uid;
  // ---------------------------
this.smallData.familyMembers = this.familyMember.familyMembers;
this.smallData.relation = this.familyMember.relation;
this.addSmallData();
    this.aboutService.saveFamilyMembers(this.familyMember)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  FamilyMembersRefresh() {
    this.familyMember.id = null;
    this.familyMember.familyMembers = null;
    this.familyMember.relation = null;
  }
// -------------------------------
  getFamilyMembersByUID(): void {
  this.aboutService.getFamilyMembersByUID(this.uid)
  .subscribe((familyMembers) => {
    this.familyMembers = familyMembers;
  });
  }
  // -------------------------------
  getFamilyMembersById(id: string): void {
    this.aboutService.getFamilyMembersById(id)
    .subscribe((familyMember) => {
      this.familyMember = familyMember;
    });
  }
  // --------------------------------
  deleteFamilyMembersById(id: string): void {
    this.aboutService.deleteFamilyMembersById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

 // -----------------------------------------------------------------------------------------

// FavoriteQuotes ALL METHODS ARE HERE
saveFavoriteQuotes(): void {
  this.favoriteQuote.uid = this.uid;
  // ---------------------------
this.smallData.favoriteQuote = this.favoriteQuote.favoriteQuote;
this.addSmallData();
    this.aboutService.saveFavoriteQuotes(this.favoriteQuote)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  this.getCurrentCityByUID();
  this.getHomeTownByUID();
  this.getOtherPlacesLivedByUID();
  this.getContactInformationByUID();
  this.getWebSiteAndSocialLinkByUID();
  this.getBasicInformationByUID();
  this.getRelationShipByUID();
  this.getFamilyMembersByUID();
  this.getFavoriteQuotesByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  FavoriteQuotesRefresh() {
    this.favoriteQuote.id = null;
    this.favoriteQuote.favoriteQuote = null;
  }
// -------------------------------
  getFavoriteQuotesByUID(): void {
  this.aboutService.getFavoriteQuotesByUID(this.uid)
  .subscribe((favoriteQuotes) => {
    this.favoriteQuotes = favoriteQuotes;
  });
  }
  // -------------------------------
  getFavoriteQuotesById(id: string): void {
    this.aboutService.getFavoriteQuotesById(id)
    .subscribe((favoriteQuote) => {
      this.favoriteQuote = favoriteQuote;
    });
  }
  // --------------------------------
  deleteFavoriteQuotesById(id: string): void {
    this.aboutService.deleteFavoriteQuotesById(id)
    .subscribe((response: Response) => {
      this.getWorkplaceByUID();
      this.getProfessionalSkillsByUID();
      this.getCollegeByUID();
      this.getHighSchoolByUID();
      this.getCurrentCityByUID();
      this.getHomeTownByUID();
      this.getOtherPlacesLivedByUID();
      this.getContactInformationByUID();
      this.getWebSiteAndSocialLinkByUID();
      this.getBasicInformationByUID();
      this.getRelationShipByUID();
      this.getFamilyMembersByUID();
      this.getFavoriteQuotesByUID();
    }, (error) => {
  
    });
  }

// --------------------------------------------------------------------------------------------
addLoginInformation(): void {
  this.logService.saveLoginInformation(this.loginInformation)
  .subscribe((response: Response) => {
  }, (error) => {

  });
  }
  // ------------------------------------------------------------------------------------------
  RefreshLoginInformation(): void {
    this.loginInformation.id = null;
    this.loginInformation.uid = null;
    this.loginInformation.email = null;
    this.loginInformation.photoUrl = null;
    this.loginInformation.userName = null;
  }


// --------------------------------------------------------------------------------------------
addSmallData(): void {
  this.smallDataService.addSmallData(this.smallData)
  .subscribe((response: Response) => {
  }, (error) => {
  });
  }
  // --------------------------------------------------------------------------------------------

}


