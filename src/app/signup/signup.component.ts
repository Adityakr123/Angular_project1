import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.signupForm.valid) {
      const newUser = this.signupForm.value;
  
      // Retrieve existing users from localStorage or default to an empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
  
      // Add the new user to the array
      existingUsers.push(newUser);
  
      // Store the updated array of users in localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));
  
      console.log('Signup successful!', newUser);
    }
  }
}
