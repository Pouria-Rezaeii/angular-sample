import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  // example: how to be sure if the target has a value
  // selector: 'input[counting]'
  selector: '[appHighlightOnHover]',
})
export class HighlightOnHoverDirective implements OnInit {
  @Input('appHighlightOnHover') highlightColor!: string;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}

  // !!Important: If the handler method returns false, applies preventDefault on the bound element.
  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    // console.log(event);

    // first method, not recommended
    // this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;

    // second method, short and simple
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event.target']) mouseLeave() {
    this.backgroundColor = 'transparent';

    // third method
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
  }
}
