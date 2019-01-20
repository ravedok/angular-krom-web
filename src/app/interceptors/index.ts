import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalogInterceptor } from './catalog.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CatalogInterceptor,
    multi: true
  }
];
