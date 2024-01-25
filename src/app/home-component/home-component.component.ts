import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HostListener} from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  loginForm=new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')

  })
  title = 'meanMosh';
  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }
  courses =[1,2];
  viewMode='somethignelse';
  LoginUser(item:any){
    console.warn(item);

  }
  onSubmit(myForm: NgForm) { 
    console.log('Form Values:', myForm.value);
  }
}
