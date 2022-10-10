import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  location: string = 'recipe';

  onRouteChanged = (route: string) => {
    this.location = route;
  };

  ngOnInit() {}
}
