import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor(private firebase: AngularFire) { }

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): firebase.Promise<any> {
    return this.firebase.auth.login({ email: email, password: password });
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .catch(error => {
    //     console.error(error.message);
    //   })
    //   .then(value => {
    //     console.log(value);
    //   });
    
    // return firebase.auth().signInWithEmailAndPassword(email, password);
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
