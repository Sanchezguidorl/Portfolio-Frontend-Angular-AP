import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  authenticated: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  logout(): void {
this.authService.logout();
  }
}
