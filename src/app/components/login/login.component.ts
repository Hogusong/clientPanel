import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string = '';
  password: string;
  confirmPass: string;

  constructor(private authService: AuthService,
              private flashMessage: FlashMessagesService,
              private router: Router) { }

  ngOnInit() { 
    // this.authService.getLogInfo().then(
    //   (res) => {
    //     if (res) this.router.navigate(['/']);
    //   }
    // )
  }

  verifyInput(): boolean {
    if ((this.firstname.trim() + this.lastname.trim()).length < 3) {
      this.onMessage("User's name is incorrect.");
      return false;
    }
    if (this.email.indexOf('@') < 0) {
      this.onMessage('Email is not valid!');
      return false
    }
    if (this.password.length < 3 || this.password !== this.confirmPass) {
      this.onMessage('The passwords do not match!')
      return false;
    }
    return true;
  }
  
  onMessage(msg: string) {
    this.flashMessage.show(msg, {
      cssClass: 'alert-success', timeout: 2000
    });
  }

  onSubmit() {
    if (this.verifyInput()) {
      this.authService.login(
        new User(this.firstname, this.lastname, this.email, this.password)
      );
      this.router.navigate(['/clients']);
      this.onMessage("You ar now logged in")
    }  
  }
}
