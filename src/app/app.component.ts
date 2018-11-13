import { Component, OnInit } from '@angular/core';
import { faBars, faUsers, faAngleDown, faAngleUp, faCog,
  faHome, faUserCircle, faFutbol, faCalendarAlt, faListOl } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './app.beans';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _opened = false;
  faBars = faBars;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  menuItems: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      { icon: faHome, title: 'Home', isCollapsed: true, url: '/' },
      { icon: faFutbol, title: 'League', isCollapsed: true, children: [
        { icon: faCalendarAlt, title: 'Schedule', url: '/league/schedule' },
        { icon: faListOl, title: 'Standings', url: '/league/standings' }
      ]},
      { icon: faUsers, title: 'My Team(s)', isCollapsed: true, children: [
        { icon: faCalendarAlt, title: 'Schedule', url: '/team/schedule' },
        { icon: faListOl, title: 'Standings', url: '/team/standings' }
      ]},
      { icon: faCog, title: 'Settings', isCollapsed: true, children: [
        { icon: faUserCircle, title: 'Profile', url: '/profile' }
      ]}
    ];
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  onMouseDown($event: Event) {
    $event.preventDefault();
  }

  onItemClicked(item) {
    if (item.url) {
      this.router.navigateByUrl(item.url);
      this._opened = false;
    } else {
      item.isCollapsed = !item.isCollapsed;
    }
  }
}
