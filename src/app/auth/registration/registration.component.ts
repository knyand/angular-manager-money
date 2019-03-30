import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'hm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hidePassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
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

  getErrorMessageName() {
    return this.name.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      '';
  }

  onSubmit() {
    this.userService.registration({
      email: this.email.value,
      username: this.name.value,
      password: this.password.value,
      enabled: true
    })
      .subscribe(
        (res) => {
          console.log(res);
          this.message = '';
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
          this.message = `User with "${error.error.email}" email exists`;
        }
      );

  }

}
