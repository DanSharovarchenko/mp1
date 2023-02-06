import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppComponent } from '../root/app.component';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}