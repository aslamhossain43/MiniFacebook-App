import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  uidDataBase = '1lF136L2aegcwAE2LLbJwPZvH2S2';
  uid: string;
    authenticatedName: any;
    photoUrl: string;
    constructor(public af: AngularFireAuth, private router: Router) {
      this.af.authState.subscribe(auth => {
        if (!auth.displayName) {
          this.authenticatedName = auth.email;
        } else {
          this.authenticatedName = auth.displayName;
        }
        this.photoUrl = auth.photoURL;
        this.uid = auth.uid;
      });

    }
    // FOR NAV COLLAPSE
    isCollapsed = true;
    // LOGOUT
    logout() {
      this.af.auth.signOut();
      this.authenticatedName = null;
      this.photoUrl = null;
      this.router.navigateByUrl('/login');
    }
    ngOnInit() {
    }
}
