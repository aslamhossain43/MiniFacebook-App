import { Component, OnInit, TemplateRef } from '@angular/core';
import { Workplace } from './about.workplace';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AboutService } from './about.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Response } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  uid: string;
   // FOR NGX BOOTSTRAP  MODAL
   public modalRef: BsModalRef;
   // WORKPLACE OBJECTS ARE HERE
workplace = new Workplace();
workplaces: Workplace[];
  constructor( /* FOR NGX BOOTSTRAP  MODAL*/
    private modalService: BsModalService, private aboutService: AboutService,
    private af: AngularFireAuth) { 
      this.af.authState.subscribe(auth => {
        this.uid = auth.uid;
        this.getWorkplaceByUID();
      });
    }
 // FOR NGX BOOTSTRAP  MODAL
 public openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
}
  ngOnInit(): void {
    this.getWorkplaceByUID();

  }


// WORKPLACE ALL METHODS ARE HERE
saveWorkplace(): void {
this.workplace.uid = this.uid;
  this.aboutService.saveWorkplace(this.workplace)
  .subscribe(response => {
this.getWorkplaceByUID();

}, (error) => {

});
}
workplaceRefresh() {
  this.workplace.workPlace = null;
}

getWorkplaceByUID(): void {
this.aboutService.getWorkplaceByUID(this.uid)
.subscribe((workplace) => {
  this.workplaces = workplace;
});
}
getWorkplaceById(id: string): void {
  this.aboutService.getWorkplaceById(id)
  .subscribe((workplace) => {
    this.workplace = workplace;
  });
}
deleteWorkplaceById(id: string): void {
  this.aboutService.deleteWorkplaceById(id)
  .subscribe((response: Response) => {
 this.getWorkplaceByUID();
  }, (error) => {

  });
}
}


