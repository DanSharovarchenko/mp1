import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  })
export class ProfileComponent {
  name: string = '';
  surname: string = '';
  mail: string = '';
  phone: string='';
  constructor() {
    if (!localStorage.getItem('userinfo')) {
      console.log("User data is not found in localStorage");
      return;
    }
    let user_str = localStorage.getItem('userinfo');
    if(user_str) {
      let user_data = JSON.parse(user_str);
      this.name = user_data.name;
      this.surname = user_data.surname;
      this.mail = user_data.mail;
      this.phone=user_data.phone;
    } else {
      console.log("User data is not found in localStorage");
    }
  }
}
