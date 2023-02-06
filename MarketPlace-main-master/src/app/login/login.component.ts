import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail: string = '';
  password: string = '';
  incorrectPassword: boolean = false;
  incorrectMail: boolean = false;
  entrance = false;
  constructor(public authService: AuthService, private router: Router) {}
    
  

  ngOnInit(): void { }
  login(): void {
    let user_str = localStorage.getItem("userinfo")
    if (user_str !== null) {
    } else {
      console.log('Пусто')
      return;
    }
    let user = JSON.parse(user_str);
    if (this.mail === user['mail']) {

    } else {
      this.incorrectMail = true;
      console.log('Пизда мейлу')
      return;
    }
    if (this.password === user['password']) {
    } else {
      console.log('Пизда паролю')
      this.incorrectPassword = true;
      return;
    }
    this.authService.login();
    // alert("Вы успешно вошли")
    this.router.navigate(['/']);
  }
}


