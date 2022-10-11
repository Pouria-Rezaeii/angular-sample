import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input('appIf') set shouldRender(value: boolean) {
    if (value) {
      this.container.createEmbeddedView(this.templateRef);
    } else {
      this.container.clear();
    }
  }
}
