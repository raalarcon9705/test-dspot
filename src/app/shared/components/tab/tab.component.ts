import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) templateRef!: TemplateRef<any>;

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
