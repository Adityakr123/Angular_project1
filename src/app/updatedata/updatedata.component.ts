import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent {
  userId: string = '';
  password: string = '';
  updatedUser: string = '';
  updatedpassword: string='';
  flag=0;
  updateForm = new FormGroup({
    name:new FormControl(''),
    key: new FormControl(''),
    mail:new FormControl('')

  })
  authenticateData(){
    const storedUsers = JSON.parse(localStorage.getItem('formDataList') || '[]');
    const matchingUser = storedUsers.find(
      (user: { user: string; password: string }) =>
        user.user === this.userId && user.password === this.password
    );
    
    if(matchingUser){
      this.flag=1;
      console.log(this.flag);
      this.updateForm.patchValue({
        name:matchingUser.user,
        key:matchingUser.password,
        mail:matchingUser.email
        
  
      });
      console.log(matchingUser.email);

    }
  }

  onUpdateData() {

    
    const storedUsers = JSON.parse(localStorage.getItem('formDataList') || '[]');

    const matchingUser = storedUsers.find(
      (user: { user: string; password: string }) =>
        user.user === this.userId && user.password === this.password
    );
    

    if (matchingUser) {

      console.log('adi');
      matchingUser.user=this.updateForm.get('name')?.value;
      matchingUser.password=this.updateForm.get('key')?.value;
      matchingUser.email=this.updateForm.get('mail')?.value;
      localStorage.setItem('formDataList', JSON.stringify(storedUsers));

      console.log('Data updated successfully.');
    } else {
      console.log('Invalid credentials. Unable to update data.');
    }
  }
  get name() {
    return this.updateForm.get('name');
  }

  get key() {
    return this.updateForm.get('key');
  }
  get mail(){
    return this.updateForm.get('mail');
  }
}
