import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formexample1',
  templateUrl: './formexample1.component.html',
  styleUrls: ['./formexample1.component.css']
})
export class Formexample1Component {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required,Validators.min(0) ,Validators.pattern(/^-?\d+$/)]),
    terms: new FormControl(false, Validators.requiredTrue),
    gender: new FormControl('', Validators.required), 
    rangeInput: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]), 
    dateInput: new FormControl('', Validators.required),
    colorPicker: new FormControl('', Validators.required)
  });

  onsubmituser() {
    console.warn(this.loginForm.value);
  }
  isAgeInvalid() {
    const ageControl = this.loginForm.get('age');
    return ageControl && ageControl.invalid && ageControl.touched;
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get age() {
    
    return this.loginForm.get('age');
  }

  get terms() {
    return this.loginForm.get('terms');
  }
  get gender() {
    return this.loginForm.get('gender');
  }

  get rangeInput() {
    return this.loginForm.get('rangeInput');
  }

  get dateInput() {
    return this.loginForm.get('dateInput');
  }

  get colorPicker() {
    return this.loginForm.get('colorPicker');
  }
}
