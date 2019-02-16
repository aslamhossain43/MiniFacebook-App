import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile.upload-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileGetService } from './profile.photo-get-service';
import { ProfilePhoto } from './profile.photo';
import { ProfileDeleteService } from './profile.delete-service';
import { LoginInformation } from '../login/login.loginformation';
import { LoginService } from '../login/login.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();

// -------------------------------------------------------------------------------------------

  // FOR NAV COLLAPSE
  isCollapsed = true;
  // -----------------------------------------------------------------------------------------
  uid: string;
  // ---------------------------------------------------------------------------------------
  // FOR NGX BOOTSTRAP  MODAL
  public modalRef: BsModalRef;
  // ----------------------------------------------------------------------------------------
  // FOR FILE
  selectedProfileImage: FileList;
  currentProfileImageUpload: File;
  // ---------------------------------------------------------------------------------------
  // ENTITY OBJECT
  profilePhotos: ProfilePhoto[];
  lastProfilePhoto: ProfilePhoto[];
  profilePhoto = new ProfilePhoto();
  // -----------------------------------------------------------------------------------------
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private profileImageService: ProfileService,
    private af: AngularFireAuth, private profileGetService: ProfileGetService,
    private profileDeleteService: ProfileDeleteService, private logService: LoginService) {
    this.af.authState.subscribe(auth => {
      this.uid = auth.uid;
       this.getLastProfilePhotoInformation();
      this.getProfilePhotosAllInformations();
    });
    // ------------------------------------------
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

  ngOnInit() {
   // ----------------------------------------------------------------------------------
    this.getProfilePhotosAllInformations();
// --------------------------------------------------------------------------------------
 this.addLoginInformation();
 
  }

// ---------------------------------------------------------------------------------------
  // FOR NGX BOOTSTRAP  MODAL
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  // ------------------------------------------------------------------------------------
  // FOR PROFILE IMAGE UPLOAD
  selectProfileImage(event) {
    this.selectedProfileImage = event.target.files;
  }
  // --------------------------------------------------------------------------------------
  // UPLOAD PROFILE IMAGE
  addProfileImage() {

    this.currentProfileImageUpload = this.selectedProfileImage.item(0);
    this.profileImageService.addProfileImage(this.currentProfileImageUpload, this.uid)
      .subscribe(event => {
        this.selectedProfileImageRefreshToWorkImage();
        this.getProfilePhotosAllInformations();
        this.getLastProfilePhotoInformation();
            },
        (error) => {

        }
      );
  }
  // ------------------------------------------------------------------------------------------
  // SELECTED PROFILE IMAGE REFRESH TO WORK SAVE BUTTON
  selectedProfileImageRefreshToWorkImage() {
    this.selectedProfileImage = null;
  }
// ---------------------------------------------------------------------------------------------
  // GET PROFILE PHOTO'S ALL INFORMATIONS
  getProfilePhotosAllInformations(): void {
    this.profileGetService.getProfilePhotosAllInformation(this.uid)
      .subscribe((profilePhotosAllInformation) => {
        this.profilePhotos = profilePhotosAllInformation;
      });
  }
// -----------------------------------------------------------------------------------------
  // GET LAST PROFILE PHOTO INFORMATION
  getLastProfilePhotoInformation(): void {
    this.profileGetService.getLastProfilePhotoInformation(this.uid)
      .subscribe((profilePhotosAllInformation) => {
        this.lastProfilePhoto = profilePhotosAllInformation;

      });
  }
  // --------------------------------------------------------------------------------------
// DELETE SINGLE PROFILE PHOTO BY ID
deleteProfilePhotoById(id: string){
  this.profileDeleteService.deleteProfilePhotoById(id)
  .subscribe(event => {
   this.getProfilePhotosAllInformations();
   this.getLastProfilePhotoInformation();
  },
  (error) => {
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


}



