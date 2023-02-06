import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private readonly LOCAL_STORAGE_KEY = 'isLoggedIn';

    constructor() { }
  
    login() {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, 'true');
    }
  
    logout() {
      localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    }
  
    isLoggedIn(): boolean {
      return localStorage.getItem(this.LOCAL_STORAGE_KEY) === 'true';
    }
  }