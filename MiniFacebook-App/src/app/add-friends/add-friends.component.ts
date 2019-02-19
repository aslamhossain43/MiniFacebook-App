import { Component, OnInit } from '@angular/core';
import { LoginInformation } from '../login/login.loginformation';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from '../login/login.service';
import { Response } from '@angular/http';
import { AddFriendService } from './add-friends.service';
import { AddFriendsAllInformation } from './add-friends.addfriend-information';
import { AllLoginformation } from './add-friends.add-all-loginformation';
import { AllWorkplaces } from './add-friends.all-workplaces';
import { SmallData } from '../profile/profile.small-data';
import { SmallDataService } from '../profile/profile.small-data-service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss']
})
export class AddFriendsComponent implements OnInit {
  uid: string;
  // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();
 // ------------------------------------------------------------------------------------------
 addFriendsAllInformation: AddFriendsAllInformation[];
// ------------------------------------------------------------------------------------------
allLoginformation: AllLoginformation[];
// ------------------------------------------------------------------------------------------
allWorkplaces: AllWorkplaces;
// -------------------------------------------------------------------------------------------
allAddFriendsInformation: AddFriendsAllInformation[];
// ---------------------------------------------------------------------------------------------
smallDatas: SmallData[];
// ----------------------------------------------------------------------------------------------
constructor(private af: AngularFireAuth, private logService: LoginService
  , private addFriendService: AddFriendService, private smallDataService: SmallDataService) {
  this.af.authState.subscribe(auth => {
this.uid = auth.uid;
    this.loginInformation.uid = auth.uid;
    if (auth.displayName) {
      this.loginInformation.userName = auth.displayName;
    } else {
      this.loginInformation.email = auth.email;
    }
    this.loginInformation.photoUrl = auth.photoURL;
  });
  }
 // ----------------------------------------------------------------------------------------
  ngOnInit() {
    this.addLoginInformation();
    // ------------------------
     this.getAllWorkplaces();
    this.getAllLoginformation();
   // this.getAllAddFriendsInformation();
   this.getAllSmallData();
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
getAllWorkplaces(): void {
  this.addFriendService.getAllWorkplaces()
  .subscribe((workplaces) => {
    this.allWorkplaces = workplaces[0];
  });
}
// --------------------------------------------------------------------------------------------
getAllLoginformation(): void {
  this.addFriendService.getAllLoginformation()
  .subscribe((loginformation) => {
    this.allLoginformation = loginformation;
  });
}
/*
getAllAddFriendsInformation(): void {
  this.addFriendService.getAllAddFriendsInformation()
  .subscribe((allAddFriendsInformation) => {
    this.allAddFriendsInformation = allAddFriendsInformation;
  });
}
*/

// --------------------------------------------------------------------------------------------
getAllSmallData(): void {
  this.smallDataService.getAllSmallData()
  .subscribe((smallData) => {
    this.smallDatas = smallData;
  });
}
}


