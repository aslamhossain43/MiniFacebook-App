import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss']
})
export class AddFriendsComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
