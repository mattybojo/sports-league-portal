import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _opened = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}