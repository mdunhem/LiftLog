import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.setMessage();
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.form.value.email, this.form.value.password)
      .catch(error => {
        this.message = error.message;
      })
      .then(user => {
        this.message = 'Signed in email: ';
        // this.setMessage();
        // let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // this.router.navigate([redirect]);
      });
    
    // .subscribe(() => {
    //   this.setMessage();
    //   if (this.authService.isLoggedIn) {
    //     // Get the redirect URL from our auth service
    //     // If no redirect has been set, use the default
    //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
    //     // Redirect the user
    //     this.router.navigate([redirect]);
    //   }
    // });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
