import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ErrorModule } from './error/error.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ErrorModule,
    AuthenticationModule
  ],
  providers: [
  ]
})
export class CoreModule { }
