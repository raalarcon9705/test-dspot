import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UsersRoutingModule } from './routes/users-routing.module';
import { UsersListViewComponent } from './routes/users-list-view/users-list-view.component';
import { UserDetailViewComponent } from './routes/user-detail-view/user-detail-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserListItemComponent,
    UsersListViewComponent,
    UserDetailViewComponent
  ],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
