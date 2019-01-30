import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.service';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessagesComponent } from './messages/messages.component';
import { ActiveFriendsComponent } from './active-friends/active-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { RequestedFriendsComponent } from './requested-friends/requested-friends.component';

export const router: Routes = [

  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'message', component: MessagesComponent },
  { path: 'active-friends', component: ActiveFriendsComponent },
  { path: 'add-friends', component: AddFriendsComponent},
  { path: 'requested-friends', component: RequestedFriendsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



