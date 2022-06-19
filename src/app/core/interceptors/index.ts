import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReadOnlyInterceptor } from './read-only.interceptor';

function addInterceptor<T>(interceptor: T) {
  return {
    provide: HTTP_INTERCEPTORS,
    useClass: interceptor,
    multi: true,
  };
}

export const httpInterceptorProviders = [addInterceptor(ReadOnlyInterceptor)];
