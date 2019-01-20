import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Injectable()
export class CatalogInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const catalogReq = req.clone({
      url: this.config.apiUrl + req.url
    });

    return next.handle(catalogReq);
  }
}
