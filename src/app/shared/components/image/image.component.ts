import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() src = '';
  @Input() alt = '';
  @Input() set width(val: number | string) {
    if (typeof val === 'number') {
      val = `${val}px`;
    }
    if (this.el.nativeElement) {
      this.el.nativeElement.style.setProperty('--width', val);
    }
  }

  @Input() set height(val: number | string) {
    if (typeof val === 'number') {
      val = `${val}px`;
    }
    if (this.el.nativeElement) {
      this.el.nativeElement.style.setProperty('--height', val);
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { }
  ngOnInit() {
  }

}
