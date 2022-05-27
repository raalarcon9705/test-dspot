import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss'],
})
export class UsersListViewComponent implements OnInit {
  users$ = this._usersStoreService.all$;
  loading$ = this._usersStoreService.loading$;

  constructor(
    private _usersStoreService: UsersStoreService,
    private _title: Title,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._loadUsers();
    this._setMetadata();
  }

  private _loadUsers() {
    this._usersStoreService.loadUsers();
  }

  private _setMetadata() {
    this._title.setTitle(this._route.snapshot.data['metaData'].title)
  }
}
