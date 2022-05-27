import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, map, Observable, take } from 'rxjs';
import { PageMetadata } from '../interfaces';
import { User } from '../interfaces/user';
import { UsersStoreService } from '../store/users';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<PageMetadata> {
  constructor(private _usersStoreService: UsersStoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageMetadata> {
    // TODO Change for real ID from route params
    this._usersStoreService.loadUser(6);
    return this._usersStoreService.selected$.pipe(
      filter(user => !!user && !!user.bio),
      take(1),
      map((user) => ({
        title: user!.first_name + ' ' + user!.last_name,
        description: user!.bio,
        image: user!.img
      }))
    )
  }
}
