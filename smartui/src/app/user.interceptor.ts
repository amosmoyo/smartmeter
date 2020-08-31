import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export class UserInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if ( token ) {
      const modefiedReq: HttpRequest<any> = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      return next.handle(modefiedReq).pipe(
        tap(event => {
          if (event instanceof HttpResponse ) {
            console.log(event.body);
          }
        })
      );
    }

    return next.handle(req);
  }
}
