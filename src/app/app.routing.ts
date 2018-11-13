import { TeamStandingsComponent } from './team/standings/standings.component';
import { LeagueStandingsComponent } from './league/standings/standings.component';
import { TeamScheduleComponent } from './team/schedule/schedule.component';
import { LeagueScheduleComponent } from './league/schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'league/schedule', component: LeagueScheduleComponent },
  { path: 'league/standings', component: LeagueStandingsComponent },
  { path: 'team/schedule', component: TeamScheduleComponent },
  { path: 'team/standings', component: TeamStandingsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
