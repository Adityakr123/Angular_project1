import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
    loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),//by default value set karde dono '' ke bech main 
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),

  })
  onsubmituser(){
    console.warn(this.loginForm.value);
  }
  get user(){
    console.log(this.loginForm.get('user'));
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
