import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {fromBottom } from '../router.animations';
import { auth as authen } from 'firebase';
import { LoginInformation } from './login.loginformation';
import { LoginService } from './login.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fromBottom()]
})
export class LoginComponent implements OnInit {
  // ----------------------------------------------------------------------------------------
loginInformation = new LoginInformation();

// -------------------------------------------------------------------------------------------
  error: any;
  // -----------------------------------------------------------------------------------------
  constructor(public af: AngularFireAuth, private router: Router,
     private logService: LoginService) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/home');
      }

  });
}
// --------------------------------------------------------------------------------------------
  @HostBinding('@fromBottom')
// ------------------------------------------------------------------------------------------
  loginFb() {
    this.af.auth.signInWithPopup(new authen.FacebookAuthProvider()).then(
      (success) => {
  this.router.navigate(['/home']);
this.RefreshLoginInformation();
this.af.authState.subscribe(auth => {

  this.loginInformation.uid = auth.uid;
  if (auth.displayName) {
    this.loginInformation.userName = auth.displayName;
  } else {
    this.loginInformation.email = auth.email;
  }
  this.loginInformation.photoUrl = auth.photoURL;
  this.addLoginInformation();
});

}).catch(
  (err) => {
    this.error = err;
  });
  }
// -------------------------------------------------------------------------------------------
  loginGoogle() {
    this.af.auth.signInWithPopup(new authen.GoogleAuthProvider()).then(
      (success) => {

        this.router.navigate(['/home']);
        this.RefreshLoginInformation();
this.af.authState.subscribe(auth => {

  this.loginInformation.uid = auth.uid;
  if (auth.displayName) {
    this.loginInformation.userName = auth.displayName;
  } else {
    this.loginInformation.email = auth.email;
  }
  this.loginInformation.photoUrl = auth.photoURL;
  this.addLoginInformation();
});

      }).catch(
        (err) => {
          this.error = err;
        });
  }
// -------------------------------------------------------------------------------------------
  ngOnInit(): void {

  }
// --------------------------------------------------------------------------------------------
addLoginInformation(): void {
this.logService.saveLoginInformation(this.loginInformation)
.subscribe((response: Response) => {

}, (error) => {

});
}

RefreshLoginInformation(): void {
  this.loginInformation.id = null;
  this.loginInformation.uid = null;
  this.loginInformation.email = null;
  this.loginInformation.photoUrl = null;
  this.loginInformation.userName = null;
}





}
