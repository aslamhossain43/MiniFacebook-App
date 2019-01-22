import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedFriendsComponent } from './requested-friends.component';

describe('RequestedFriendsComponent', () => {
  let component: RequestedFriendsComponent;
  let fixture: ComponentFixture<RequestedFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
