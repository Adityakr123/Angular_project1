import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-retrivedata',
  templateUrl: './retrivedata.component.html',
  styleUrls: ['./retrivedata.component.css']
})
export class RetrivedataComponent {
  formDataList1: any[] = [];
  showRetrievedData: boolean = false;
  Retrieveform = new FormGroup({
    user1: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password1: new FormControl('', [Validators.required, Validators.minLength(5)]),
    
  });

  onRetrieveData() {
 
    const storedUsers = JSON.parse(localStorage.getItem('formDataList') || '[]');
    const enteredUserData = this.Retrieveform.value;

    const matchingUser = storedUsers.find(
      (user: { user: string; password: string }) =>
        user.user === enteredUserData.user1 && user.password === enteredUserData.password1
    );
  
    if (matchingUser) {
      this.formDataList1 = [matchingUser];
      this.showRetrievedData = true; 
    } else {
      console.log('Invalid credentials. Login failed.');
      this.formDataList1 = []; 
      this.showRetrievedData = false; 
    }
  }
  
}
