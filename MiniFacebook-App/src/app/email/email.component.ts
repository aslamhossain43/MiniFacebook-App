import { Component, OnInit } from '@angular/core';
import {HostListener, Directive, HostBinding} from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { fallIn, fromTop } from '../router.animations';
import { LoginInformation } from '../login/login.loginformation';
import { LoginService } from '../login/login.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [fromTop() , fallIn()]

})
export class EmailComponent implements OnInit {
       // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();

// -------------------------------------------------------------------------------------------
  state: '';
  error: any;
// --------------------------------------------------------------------------------------------
  constructor(public af: AngularFireAuth, private router: Router,
     private logService: LoginService) {
  this.af.authState.subscribe(auth => {
    if (auth) {
      this.router.navigateByUrl('/home');
    }
  });
  // --------------------------------
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
 @HostBinding('@fromTop')
// -------------------------------------------------------------------------------------------
onSubmit(formData) {
  if (formData.valid) {

    this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
    .then(
      (success) => {
      this.router.navigate(['/home']);
    }).catch(
      (err) => {
        console.log(err);
        this.error = err;
      });
  }
}
// -------------------------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------------------------
 
}
