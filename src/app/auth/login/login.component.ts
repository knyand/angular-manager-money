import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  email = new FormControl('admin@test.loc', [Validators.required, Validators.email]);
  password = new FormControl('password', [Validators.required]);
  message = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      '';
  }

  onSubmit() {
    this.userService.authenticate({username: this.email.value, password: this.password.value})
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response));
          this.message = '';
          this.router.navigate(['/system', 'bill']);
        },
        error => {
          console.error(error);
          this.message = 'Email or password is not correct';
        }
      );
  }

}
