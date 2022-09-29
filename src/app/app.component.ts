import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpts = [
    { path: '/home', name: 'Home'},
    { path: '/users', name: 'Users'},
    { path: '/photo', name: 'Photo'},
  ];
  title = 'router-angular';
}
