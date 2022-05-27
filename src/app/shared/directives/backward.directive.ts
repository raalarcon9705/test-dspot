import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackward]'
})
export class BackwardDirective {

  constructor(private _location: Location) { }

  @HostListener('click', ['$event']) onClick(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this._location.back();
  }

}
