import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile.service';
import { AngularFireAuth } from 'angularfire2/auth';

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
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private profileImageService: ProfileService,
    private af: AngularFireAuth) {
      this.af.authState.subscribe(auth => {
        this.uid = auth.uid;
      });
     }

  ngOnInit() {

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
}

