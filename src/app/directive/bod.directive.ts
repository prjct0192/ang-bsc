import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBod]'
})
export class BodDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.alignItems = 'center';

  }
}
