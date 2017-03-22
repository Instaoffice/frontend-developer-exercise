import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private router: Router) {
  }

  valid_username = null;
  invalid_password = null;
  error_message = null;
  user = {
    id: null,
    password: null
  };
  title = 'Unlock the force';

  next() {
    if (this.user.id == 'yoda') {
      this.valid_username = true;
      if (this.user.password == 'dogbah') {
        this.router.navigateByUrl('/list');
      }
      else {
        this.error_message = "The password you have entered does not match the username!"
        this.invalid_password = true;
      }
    }
    else {
      this.error_message = "Invalid Username"
      this.valid_username = false;
    }
  };
}
