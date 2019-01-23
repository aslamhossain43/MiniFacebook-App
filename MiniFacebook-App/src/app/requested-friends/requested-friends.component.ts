import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-friends',
  templateUrl: './requested-friends.component.html',
  styleUrls: ['./requested-friends.component.scss']
})
export class RequestedFriendsComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
