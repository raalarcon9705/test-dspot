import { Component, OnInit } from '@angular/core';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$ = this._usersStoreService.all$;
  lading$ = this._usersStoreService.loading$;

  constructor(private _usersStoreService: UsersStoreService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this._usersStoreService.loadUsers();
  }

}
