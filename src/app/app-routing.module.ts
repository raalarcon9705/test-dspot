import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./pages/user-details/user-details.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
