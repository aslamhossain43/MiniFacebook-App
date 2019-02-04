import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile.upload-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileGetService } from './profile.photo-get-service';
import { ProfilePhoto } from './profile.photo';
import { ProfileDeleteService } from './profile.delete-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // FOR NAV COLLAPSE
  isCollapsed = true;
  // GETTING UID
  uid: string;
  // FOR NGX BOOTSTRAP  MODAL
  public modalRef: BsModalRef;
  // FOR FILE
  selectedProfileImage: FileList;
  currentProfileImageUpload: File;
  // ENTITY OBJECT
  profilePhotos: ProfilePhoto[];
  lastProfilePhoto: ProfilePhoto[];
  profilePhoto = new ProfilePhoto();
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private profileImageService: ProfileService,
    private af: AngularFireAuth, private profileGetService: ProfileGetService,
    private profileDeleteService: ProfileDeleteService) {
    this.af.authState.subscribe(auth => {
      this.uid = auth.uid;
      this.getLastProfilePhotoInformation(this.uid);
    });
  }

  ngOnInit(): void {
    this.getProfilePhotosAllInformations(this.uid);
      this.getLastProfilePhotoInformation(this.uid);

  }


  // FOR NGX BOOTSTRAP  MODAL
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  // FOR PROFILE IMAGE UPLOAD
  selectProfileImage(event) {
    this.selectedProfileImage = event.target.files;
  }
  // UPLOAD PROFILE IMAGE
  addProfileImage() {

    this.currentProfileImageUpload = this.selectedProfileImage.item(0);
    this.profileImageService.addProfileImage(this.currentProfileImageUpload, this.uid)
      .subscribe(event => {
        this.selectedProfileImageRefreshToWorkImage();
        this.getProfilePhotosAllInformations(this.uid);
        this.getLastProfilePhotoInformation(this.uid);
            },
        (error) => {

        }
      );
  }
  // SELECTED PROFILE IMAGE REFRESH TO WORK SAVE BUTTON
  selectedProfileImageRefreshToWorkImage() {
    this.selectedProfileImage = null;
  }

  // GET PROFILE PHOTO'S ALL INFORMATIONS
  getProfilePhotosAllInformations(uid: string): void {
    this.profileGetService.getProfilePhotosAllInformation(uid)
      .subscribe((profilePhotosAllInformation) => {
        this.profilePhotos = profilePhotosAllInformation;
        this.getLastProfilePhotoInformation(this.uid);
      });
  }

  // GET LAST PROFILE PHOTO INFORMATION
  getLastProfilePhotoInformation(uid: string): void {
    this.profileGetService.getLastProfilePhotoInformation(uid)
      .subscribe((profilePhotosAllInformation) => {
        this.lastProfilePhoto = profilePhotosAllInformation;

      });
  }
// DELETE SINGLE PROFILE PHOTO BY ID
deleteProfilePhotoById(id: string){
  this.profileDeleteService.deleteProfilePhotoById(id)
  .subscribe(event => {
   this.getProfilePhotosAllInformations(this.uid);
   this.getLastProfilePhotoInformation(this.uid);
  },
  (error) => {
  });
}



}



