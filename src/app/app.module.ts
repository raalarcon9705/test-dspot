import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { ButtonComponent } from './components/button/button.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    ButtonComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
