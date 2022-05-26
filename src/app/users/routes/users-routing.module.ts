import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes : Routes = [
  {
    path: ':id',
    component: UserDetailsComponent
  },
  {
    path: '',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
