import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  value='';
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // Retrieve existing users from localStorage or default to an empty array
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
  
      const enteredUserData = this.loginForm.value;
  
      const matchingUser = storedUsers.find(
        (user: { username: string; password: string }) =>
          user.username === enteredUserData.username && user.password === enteredUserData.password
      );
  
      if (matchingUser) {
        console.log('Login successful!', enteredUserData);
        this.value="hi user "+enteredUserData.username;
      } else {
        console.log('Invalid credentials. Login failed.');
        this.value="Invalid credentials. Login failed.";
      }
    }
  }
}
