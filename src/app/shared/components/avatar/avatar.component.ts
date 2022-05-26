import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() src = '';
  @Input() alt = '';
  @Input() online = true;
  @Input() width = 60;
  @Input() height = 60;

  constructor() {}

  ngOnInit(): void {
  }

}
