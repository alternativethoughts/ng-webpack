import { OnInit, Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[myappUnless]'
})

export class UnlessDirective implements OnInit {
  @Input() set myappUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

  ngOnInit() {

  }
}