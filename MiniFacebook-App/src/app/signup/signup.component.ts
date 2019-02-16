import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {fallIn, fromTop} from '../router.animations';
import { LoginInformation } from '../login/login.loginformation';
import { LoginService } from '../login/login.service';
import { Response } from '@angular/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [fromTop(), fallIn()]
})
export class SignupComponent implements OnInit {
      // ---------------------------------------------------------------------------------------------
loginInformation = new LoginInformation();
// ---------------------------------------------------------------------------------------------
  state: '';
  error: any;

// --------------------------------------------------------------------------------------------
constructor(public af: AngularFireAuth, private logService: LoginService,
  private router: Router) {
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
  // TO BIND EXPORTED ANIMATION FUNCTION
  @HostBinding('@fromTop')
// --------------------------------------------------------------------------------------------

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          this.router.navigate(['/home']);
        }).catch(
          (err) => {
            this.error = err;
          });
    }
  }
// ---------------------------------------------------------------------------------------------
  
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
