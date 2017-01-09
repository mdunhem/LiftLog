import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService, FirebaseAuthState } from './auth.service';
import { Observable, Subject } from 'rxjs';
import { MapOperator } from 'rxjs/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  private _authorized = false;
  private set authorized(newValue: boolean) {
    this._authorized = newValue;
    this._authStateSubject.next(newValue);
  }
  private _authStateSubject = new Subject<boolean>();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authState.subscribe(authState => {
      if (authState) {
        this.authorized = true;
      } else {
        this.authorized = false;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.authService.redirectUrl = state.url;

    this.authService.authState.lift<boolean>(new MapOperator<FirebaseAuthState, boolean>(value => {
      if (value) {
        return true;
      }
      return false;
    }, this));

    if (!this._authorized) {
     this.router.navigate(['/login']);
    }

    return this._authStateSubject.asObservable();
  }

  checkLogin(url: string): boolean {
    this.authService.redirectUrl = url;

    if (this._authorized) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
