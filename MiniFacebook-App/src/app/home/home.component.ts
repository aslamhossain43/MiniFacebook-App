import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from '../login/login.service';
import { LoginInformation } from '../login/login.loginformation';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `I want to be a software engineer #${i}`);

  constructor(private af: AngularFireAuth, private logService: LoginService) {

  }

  ngOnInit() {

  }

}
