import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  message = '';
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['admin@test.loc', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]]
    });
  }

  getErrorMessageEmail() {
    return this.userForm.get('email').hasError('required') ? 'You must enter a value' :
      this.userForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePassword() {
    return this.userForm.get('password').hasError('required') ? 'You must enter a value' :
      '';
  }

  onSubmit() {
    this.userService.authenticate(this.userForm.value)
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response));
          this.message = '';
          this.router.navigate(['/system', 'bill']).catch(
            error => console.error(error)
          );
        },
        error => {
          console.error(error);
          this.message = 'Email or password is not correct';
        }
      );
  }

}
