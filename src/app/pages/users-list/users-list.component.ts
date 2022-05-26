import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$ = this.usersService.users$;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers();
  }

}
