import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  showRegister: boolean = true;
  user: User ;

  constructor(private authService: AuthService,
              private router: Router) { 
  }

  ngOnInit() {
    this.authService.setLogInfo.subscribe(res => {
      if (res) {
        this.isLoggedIn = true;
        this.user = res;
      } else {
        this.isLoggedIn = false;
        this.user = null;
      }
    })
  }

  onLogout() {
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
