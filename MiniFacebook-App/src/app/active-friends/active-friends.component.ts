import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-friends',
  templateUrl: './active-friends.component.html',
  styleUrls: ['./active-friends.component.scss']
})
export class ActiveFriendsComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
