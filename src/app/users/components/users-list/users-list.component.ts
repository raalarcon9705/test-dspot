import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] | null = [];
  @Input() loading: boolean | null = false;

  constructor() {}

  ngOnInit(): void {

  }
}
