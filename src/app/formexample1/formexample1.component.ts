import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formexample1',
  templateUrl: './formexample1.component.html',
  styleUrls: ['./formexample1.component.css']
})
export class Formexample1Component {
  formDataList: any[] = [];
  showRetrievedData: boolean = false;

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('', [ Validators.minLength(5)]),
    email: new FormControl('', [Validators.email]),
    age: new FormControl('', [Validators.min(0), Validators.pattern(/^-?\d+$/)]),
    terms: new FormControl(false),
    gender: new FormControl(''),
    rangeInput: new FormControl('', [Validators.min(0), Validators.max(100)]),
    dateInput: new FormControl(''),
    colorPicker: new FormControl('')
  });


  onsubmituser() {
    const formData = this.loginForm.value;

    this.formDataList.push(formData);


    localStorage.setItem('formDataList', JSON.stringify(this.formDataList));

    console.warn('Form data stored locally:', formData);
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
