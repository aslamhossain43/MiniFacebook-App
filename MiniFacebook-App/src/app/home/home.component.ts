import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from '../login/login.service';
import { LoginInformation } from '../login/login.loginformation';
import { AngularFireAuth } from 'angularfire2/auth';
import { Response } from '@angular/http';
import { SmallData } from '../profile/profile.small-data';
import { SmallDataService } from '../profile/profile.small-data-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `I want to be a software engineer #${i}`);
// ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();
// ----------------------------------------------------------------------------------------------
smallData = new SmallData();
// ----------------------------------------------------------------------------------------------
  constructor(private af: AngularFireAuth, private logService: LoginService,
    private smallDataService: SmallDataService) {
    this.af.authState.subscribe(auth => {

      this.loginInformation.uid = auth.uid;
      if (auth.displayName) {
        this.loginInformation.userName = auth.displayName;
      } else {
        this.loginInformation.email = auth.email;
      }
      this.loginInformation.photoUrl = auth.photoURL;
      // --------------------------------
      this.smallData.uid = auth.uid;
      this.smallData.userName = auth.displayName;
      this.smallData.email = auth.email;
      this.smallData.photoUrl = auth.photoURL;

    });
  }
  // -------------------------------------------------------------------------------------------
  ngOnInit() {
    this.addLoginInformation();
    this.addSmallData();
  }
// --------------------------------------------------------------------------------------------
addLoginInformation(): void {
  this.logService.saveLoginInformation(this.loginInformation)
  .subscribe((response: Response) => {
  }, (error) => {

  });
  }
  // ------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------
addSmallData(): void {
  this.smallDataService.addSmallData(this.smallData)
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

}
