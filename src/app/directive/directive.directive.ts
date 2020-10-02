import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class DirectiveDirective {

  constructor(private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.backgroundColor = 'paleturquoise';
    this.elementRef.nativeElement.style.display = 'flex';
  }
}
