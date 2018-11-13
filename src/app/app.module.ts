import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LeagueScheduleComponent } from './league/schedule/schedule.component';
import { LeagueStandingsComponent } from './league/standings/standings.component';
import { TeamScheduleComponent } from './team/schedule/schedule.component';
import { TeamStandingsComponent } from './team/standings/standings.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueScheduleComponent,
    LeagueStandingsComponent,
    TeamScheduleComponent,
    TeamStandingsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
