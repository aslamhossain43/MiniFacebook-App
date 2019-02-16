import { Component, OnInit } from '@angular/core';
import { LoginInformation } from '../login/login.loginformation';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from '../login/login.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();

// -------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
constructor(public af: AngularFireAuth, private logService: LoginService) {
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
// ---------------------------------------------------------------------------------------

  ngOnInit() {
    this.addLoginInformation();
 
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
