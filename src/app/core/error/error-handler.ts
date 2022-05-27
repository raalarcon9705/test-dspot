import { ErrorHandler } from '@angular/core';
import { environment } from 'src/environments/environment';

export class AppErrorHandler extends ErrorHandler {
  override handleError(error: any): void {
    // TODO report or log error, or use some tool for error management like Sentry
    if (!environment.production) {
      console.warn('[ErrorHandler]', error);
    }
  }
}
