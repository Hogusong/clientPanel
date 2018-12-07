import { EventEmitter } from "@angular/core";
import { User, LogInfo } from '../models';

export class AuthService {
  loggedIn: boolean;
  user: User;
  setLogInfo = new EventEmitter<User>();

  isAutenticated() {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }

  getLogInfo() {
    this.setLogInfo.emit(this.user);
  }

  login(user: User) {
    this.loggedIn = true;
    this.user = user;
    this.setLogInfo.emit(this.user);
  }

  logout() {
    this.loggedIn = false;
  }
}