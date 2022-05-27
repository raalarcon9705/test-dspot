import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss'],
})
export class UserDetailViewComponent implements OnInit {
  user$ = this._usersStoreService.selected$;
  loading$ = this._usersStoreService.loading$;

  constructor(
    private _usersStoreService: UsersStoreService,
    private _title: Title,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._setMetadata();
  }


  private _setMetadata() {
    this._title.setTitle(this._route.snapshot.data['metaData'].title)
  }
}
