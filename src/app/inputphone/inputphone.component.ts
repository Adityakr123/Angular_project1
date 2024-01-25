// inputphone.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputphone',
  templateUrl: './inputphone.component.html',
  styleUrls: ['./inputphone.component.css'],
})
export class InputphoneComponent {
  otp: string[] = new Array(4).fill('');
}