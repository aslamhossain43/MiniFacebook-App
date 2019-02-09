import { Component, OnInit, TemplateRef } from '@angular/core';
import { Workplace } from './about.workplace';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AboutService } from './about.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Response } from '@angular/http';
import { ProfessionalSkill } from './about.professionalskill';
import { College } from './about.college';
import { HighSchool } from './about.highschool';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  uid: string;
   // --------------------------------------------------------------------------------
   public modalRef: BsModalRef;
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
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private aboutService: AboutService,
    private af: AngularFireAuth) { 
      this.af.authState.subscribe(auth => {
        this.uid = auth.uid;
        this.getWorkplaceByUID();
        this.getProfessionalSkillsByUID();
        this.getCollegeByUID();
        this.getHighSchoolByUID();
      });
    }
    // ----------------------------------------------------------------------------------
 // FOR NGX BOOTSTRAP  MODAL
 public openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
}
// --------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.getWorkplaceByUID();
   this.getProfessionalSkillsByUID();
   this.getCollegeByUID();
   this.getHighSchoolByUID();
  }

// ---------------------------------------------------------------------------------------
// WORKPLACE ALL METHODS ARE HERE
saveWorkplace(): void {
this.workplace.uid = this.uid;
  this.aboutService.saveWorkplace(this.workplace)
  .subscribe(response => {
this.getWorkplaceByUID();
this.getProfessionalSkillsByUID();
this.getCollegeByUID();
this.getHighSchoolByUID();
}, (error) => {

});
}
// ----------------------
workplaceRefresh() {
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
  }, (error) => {

  });
}




// -----------------------------------------------------------------------------------------

// PROFESSIONAL SKILLS ALL METHODS ARE HERE
saveProfessionalSkills(): void {
  this.professionalSkill.uid = this.uid;
    this.aboutService.saveProfessionalSkills(this.professionalSkill)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
this.getCollegeByUID();
  this.getHighSchoolByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  ProfessionalSkillsRefresh() {
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
    }, (error) => {
  
    });
  }
  // -----------------------------------------------------------------------------------------

// COLLEGE ALL METHODS ARE HERE
saveCollege(): void {
  this.college.uid = this.uid;
    this.aboutService.saveCollege(this.college)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  CollegeRefresh() {
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
    }, (error) => {
  
    });
  }



 // -----------------------------------------------------------------------------------------

// HIGH SCHOOL ALL METHODS ARE HERE
saveHighSchool(): void {
  this.highSchool.uid = this.uid;
    this.aboutService.saveHighSchool(this.highSchool)
    .subscribe(response => {
  this.getWorkplaceByUID();
  this.getProfessionalSkillsByUID();
  this.getCollegeByUID();
  this.getHighSchoolByUID();
  }, (error) => {
  
  });
  }
  // -----------------------------
  HighSchoolRefresh() {
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
    }, (error) => {
  
    });
  }



}


