import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './routes/users-list/users-list.component';
import { UserDetailsComponent } from './routes/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UsersRoutingModule } from './routes/users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    UsersListComponent,
    UserListItemComponent
  ],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
