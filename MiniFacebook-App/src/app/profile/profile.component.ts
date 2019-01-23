import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // FOR NAV COLLAPSE
  isCollapsed = true;
  // FOR NGX BOOTSTRAP  MODAL
  public modalRef: BsModalRef;
  // FOR FILE
  selectedProfileImage: FileList;
  currentProfileImageUpload: File;
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private profileImageService: ProfileService) { }

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
    this.profileImageService.addProfileImage(this.currentProfileImageUpload)
      .subscribe(event => {

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
