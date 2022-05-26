import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selected?: string;

  @Input() photos: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSelectPhoto(src: string) {
    this.selected = src;
  }

  onClose() {
    this.selected = undefined;
  }

}
