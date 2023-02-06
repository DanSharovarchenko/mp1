import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  surname: string = '';
  mail: string = '';
  phone: string = '';
  password: string = '';
  password1: string = '';
  incorrectPassword: boolean = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  register(): void {
    if (this.mail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      console.log("email ok");
    } else {
      console.log("not ok");
      return
    }
    if (this.password !== this.password1) {
      this.incorrectPassword = true;
      console.log('плохо паролю')
      return;
    } else {
      this.incorrectPassword = false;
      console.log('Пароль норм')
    }
    let user_obj = {
      name: this.name,
      surname: this.surname,
      mail: this.mail,
      phone: this.phone,
      password: this.password,
      password1: this.password1
    }
    let user_str: string = JSON.stringify(user_obj);
    console.log(user_str);
    localStorage.setItem('userinfo', user_str)
    console.log("I saved");
    this.authService.login();
    this.router.navigate(['/']);
    
  }

}




