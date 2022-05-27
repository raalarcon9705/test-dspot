import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImg]'
})
export class ImgDirective {
  @HostBinding('attr.src') private _src = '';

  @Input() set src(url: string) {
    this._src = url;
  }

  @Input() altImage = '/assets/image-error.svg';

  constructor() { }

  @HostListener('error') onError() {
    this._src = this.altImage;
  }

}
