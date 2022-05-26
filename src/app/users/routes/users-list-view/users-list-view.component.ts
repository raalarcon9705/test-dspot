import { Component, OnInit } from '@angular/core';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {

  users$ = this._usersStoreService.all$;
  loading$ = this._usersStoreService.loading$;

  constructor(private _usersStoreService: UsersStoreService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this._usersStoreService.loadUsers();
  }

}
