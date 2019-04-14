import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'hm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hidePassword = true;
  message = '';
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      enabled: true
    });
  }

  getErrorMessageEmail() {
    return this.userForm.get('email').hasError('required') ? 'You must enter a value' :
      this.userForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageName() {
    return this.userForm.get('name').hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessagePassword() {
    return this.userForm.get('password').hasError('required') ? 'You must enter a value' :
      '';
  }

  onSubmit() {
    this.userService.registration(this.userForm.value)
      .subscribe(
        () => {
          this.message = '';
          this.router.navigate(['/login']).catch(
            error => console.log(error)
          );
        },
        error => {
          console.error(error);
          this.message = `User with "${error.error.email}" email exists`;
        }
      );

  }

}
