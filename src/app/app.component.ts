import { Component, OnInit } from '@angular/core';
import { faBars, faUsers, faAngleDown, faAngleUp, faCog, faHome, faUserCircle, faFutbol, faCalendarAlt, faListOl } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './app.beans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _opened = false;
  faBars = faBars;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { icon: faHome, title: 'Home', isCollapsed: true},
      { icon: faFutbol, title: 'League', isCollapsed: true, children: [
        { icon: faCalendarAlt, title: 'Schedule' },
        { icon: faListOl, title: 'Standings' }
      ]},
      { icon: faUsers, title: 'My Team(s)', isCollapsed: true, children: [
        { icon: faCalendarAlt, title: 'Schedule' },
        { icon: faListOl, title: 'Standings' }
      ]},
      { icon: faCog, title: 'Settings', isCollapsed: true, children: [
        { icon: faUserCircle, title: 'Profile' }
      ]}
    ];
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  onMouseDown($event: Event) {
    $event.preventDefault();
  }

  onItemClicked(item: MenuItem) {
    item.isCollapsed = !item.isCollapsed;
  }
}
