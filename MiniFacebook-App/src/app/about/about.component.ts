import { Component, OnInit } from '@angular/core';
import { Workplace } from './about.workplace';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
workplace = new Workplace();
  constructor() { }

  ngOnInit() {
  }

}
