import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  //Note: Here AuthService is not declared as usual because of
  //cyclic redundancy error it might throw and it might be
  //fixed in future releases
  constructor(private injector:Injector) { }

  intercept(req, next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq) //next passes this intercepted 
    //request to the next req in this case it is to server
  }
}
