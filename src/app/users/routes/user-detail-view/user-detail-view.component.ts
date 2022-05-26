import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss'],
})
export class UserDetailViewComponent implements OnInit {
  user$ = this._usersStoreService.selected$;

  constructor(
    private _usersStoreService: UsersStoreService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const id = this._route.snapshot.paramMap.get('id') || '';
    this._usersStoreService.loadUser(6);
  }
}
