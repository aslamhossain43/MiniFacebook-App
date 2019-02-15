import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { routes } from './app.routes';
import { NgMaterialModule } from './app.material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './app.ngx-bootstrap';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AuthGuard } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { ActiveFriendsComponent } from './active-friends/active-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { MessagesComponent } from './messages/messages.component';
import { RequestedFriendsComponent } from './requested-friends/requested-friends.component';
import { BsModalService } from 'ngx-bootstrap';
import { ProfileService } from './profile/profile.upload-service';
import { HttpModule } from '@angular/http';
import { ProfileGetService } from './profile/profile.photo-get-service';
import { ProfileDeleteService } from './profile/profile.delete-service';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about/about.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ActiveFriendsComponent,
    AddFriendsComponent,
    MessagesComponent,
    RequestedFriendsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    // FOR AUTHENTICATION
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // FOR BOOTSTRAP
    AppBootstrapModule,
    // FOR TOUTES
    routes,
    // HTTP
    HttpModule,
    // FOR NG MATERIAL
    NgMaterialModule,
    // FOR REACTIVE FORM MODULE
    ReactiveFormsModule,
    // FOR NGX BOOTSTRAP MODULE
    NgxBootstrapModule
  ],
  providers: [AuthGuard, AngularFireAuth, BsModalService, ProfileService, ProfileGetService,
ProfileDeleteService , AboutService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
