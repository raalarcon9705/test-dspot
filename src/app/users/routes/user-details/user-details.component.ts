import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UsersStoreService } from 'src/app/store/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$ = this._usersStoreService.selected$;

  constructor(private _usersStoreService: UsersStoreService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const id = this._route.snapshot.paramMap.get('id') || '';
    this._usersStoreService.loadUser(+id)
  }

}
