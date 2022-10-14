import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appToggleDropdown]',
})
export class ToggleDropdownDirective implements OnInit {
  // !!looks wired, seems that works as ngClass works => [ngClass] = "{open:isOpen}"
  // surprisingly if you add open class initially on the element itself, it won't work anymore
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}
