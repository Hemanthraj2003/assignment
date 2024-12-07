import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  Login = {
    username: '',
    password: ''
  }

  onLogin(){
    if ( this.Login.username === 'Admin' && this.Login.password === 'password'){
      alert('Successfully logged in');
      this.router.navigate(['/customers']);
    }
  }

}
