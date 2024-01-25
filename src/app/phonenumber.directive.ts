import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhonenumber]'
})
export class PhonenumberDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    const inputValue = inputElement.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '').substring(0, 10);
    inputElement.value = numericValue;
  }
  // ngOnInit() {
  //   const inputElement = this.el.nativeElement;
    
  //   inputElement.setAttribute('pattern', '[0-9]*');
  //   inputElement.setAttribute('inputmode', 'numeric');
  // }
  // ngOnInit() {
  //   const inputElement = this.el.nativeElement;
  //   inputElement.setAttribute('type', 'tel');
  // }
  
}
