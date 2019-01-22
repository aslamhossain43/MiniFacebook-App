import { Component, OnInit } from '@angular/core';
import {HostListener, Directive, HostBinding} from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { fallIn, fromTop } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [fromTop() , fallIn()]

})
export class EmailComponent implements OnInit {
  state: '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
  this.af.authState.subscribe(auth => {
    if (auth) {
      this.router.navigateByUrl('/home');
    }
  });
}
// TO BIND EXPORTED ANIMATION FUNCTION
 @HostBinding('@fromTop')

onSubmit(formData) {
  if (formData.valid) {
    console.log(formData.value);
    this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
    .then(
      (success) => {
        console.log(success);
      this.router.navigate(['/home']);
    }).catch(
      (err) => {
        console.log(err);
      this.error = err;
    });
  }
}

  ngOnInit() {
  }

}
