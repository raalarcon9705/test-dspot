import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss'],
})
export class TabsetComponent implements OnInit {
  @ContentChildren(TabComponent) _tabs!: QueryList<TabComponent>;
  selectedIndex = 0;

  get tabs() {
    return this._tabs.toArray();
  }

  get templateRef() {
    return this._tabs.get(this.selectedIndex)?.templateRef;
  }

  constructor() {}

  ngOnInit() {}

  onSelectTab(index: number) {
    this.selectedIndex = index;
  }
}
