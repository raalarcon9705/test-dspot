import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserResolver } from "src/app/resolvers";
import { UserDetailViewComponent } from "./user-detail-view/user-detail-view.component";
import { UsersListViewComponent } from "./users-list-view/users-list-view.component";

const routes : Routes = [
  {
    path: ':id',
    component: UserDetailViewComponent,
    resolve: {
      metaData: UserResolver
    }
  },
  {
    path: '',
    component: UsersListViewComponent,
    data: {
      metaData: {
        title: 'Friends',
        description: 'Your friends list',
      }
    }
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
