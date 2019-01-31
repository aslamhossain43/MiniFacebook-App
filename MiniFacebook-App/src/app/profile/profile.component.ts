import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile.upload-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileGetService } from './profile.photo-get-service';
import { ProfilePhoto } from './profile.photo';

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
  profilePhoto = new ProfilePhoto();
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private profileImageService: ProfileService,
    private af: AngularFireAuth, private profileGetService: ProfileGetService) {
    this.af.authState.subscribe(auth => {
      this.uid = auth.uid;
      console.log('UID : ' + this.uid);
    });
  }

  ngOnInit(): void {
    this.getProfilePhotosAllInformations(this.uid);
    // this.profileGetService.getProfileImage(this.uid);
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
        console.log(this.profilePhotos);
      });
  }
}



