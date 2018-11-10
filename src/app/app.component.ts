import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _opened = false;
  faBars = faBars;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
