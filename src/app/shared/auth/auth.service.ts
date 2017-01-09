import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

export { FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private firebase: AngularFire) {
    this.firebase.auth.subscribe(authState => {
      this._authState.next(authState);
    });
    this.authState.subscribe(authState => {
      if (authState) {
        this._loggedIn = true;
      } else {
        this._loggedIn = false;
      }
    });
  }

  private _authState = new Subject<FirebaseAuthState>();
  public get authState() : Observable<FirebaseAuthState> {
    return this._authState.asObservable();
  }
  
  private _loggedIn : boolean = false;
  public get loggedIn() : boolean {
    return this._loggedIn;
  }

  
  private _error = new Subject<Error>();
  public get error() : Observable<Error> {
    return this._error;
  }

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  public login(email: string, password: string): Observable<boolean> {
    this.firebase.auth.login({ email: email, password: password })
      .catch(error => this._error.next(error));
    
    return Observable.of(this.loggedIn);
  }

  public logout(): void {
    this.firebase.auth.logout();
  }
}
