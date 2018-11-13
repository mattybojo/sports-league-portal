import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirebaseUIModule } from 'firebaseui-angular';
import { getFirebaseUiAuth } from './auth/firebaseuiauth.config';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LeagueScheduleComponent } from './league/schedule/schedule.component';
import { LeagueStandingsComponent } from './league/standings/standings.component';
import { TeamScheduleComponent } from './team/schedule/schedule.component';
import { TeamStandingsComponent } from './team/standings/standings.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';

const firebaseUiAuthConfig = getFirebaseUiAuth();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueScheduleComponent,
    LeagueStandingsComponent,
    TeamScheduleComponent,
    TeamStandingsComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
