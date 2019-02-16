import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { LoginInformation } from '../login/login.loginformation';
import { Response } from '@angular/http';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  // ---------------------------------------------------------------------------------------------
  loginInformation = new LoginInformation();

  // -------------------------------------------------------------------------------------------
  
  // -----------------------------------------------------------------------------------------
  uidDataBase = '1lF136L2aegcwAE2LLbJwPZvH2S2';
  uid: string;
    authenticatedName: any;
    photoUrl: string;
    // ----------------------------------------------------------------------------------------
    constructor(public af: AngularFireAuth, private router: Router
      , private logService: LoginService) {
      this.af.authState.subscribe(auth => {
        if (!auth.displayName) {
          this.authenticatedName = auth.email;
        } else {
          this.authenticatedName = auth.displayName;
        }
        this.photoUrl = auth.photoURL;
        this.uid = auth.uid;
      });
      // ------------------------------------------
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
    // FOR NAV COLLAPSE
    isCollapsed = true;
    // ---------------------------------------------------------------------------------------
    // LOGOUT
    logout() {
      this.af.auth.signOut();
      this.authenticatedName = null;
      this.photoUrl = null;
      this.router.navigateByUrl('/login');
    }
    // ----------------------------------------------------------------------------------------
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

// -------------------------------------------------------------------------------------------    
}
