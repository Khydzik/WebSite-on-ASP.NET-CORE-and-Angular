import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private apiService: AuthService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler) {
    const token = this.apiService.getToken();
    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });


    return next.handle(request);
  }
}
