import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() onRouteChanged = new EventEmitter<string>();

  onNavigate = (route: string) => {
    this.onRouteChanged.emit(route);
  };
}
