import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorModule } from './error/error.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CacheInterceptor } from '../interceptors/cache.interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ErrorModule,
    AuthenticationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
