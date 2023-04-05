import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOtpInput]'
})
export class OtpInputDirective {
  @Input() index: number = 0;
  flag=0;
  flag1=0;
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event', 'index'])
  onKeyDown(event: KeyboardEvent): void {
    const prevInput = this.el.nativeElement.previousElementSibling as HTMLInputElement;
    const nextInput = this.el.nativeElement.nextElementSibling as HTMLInputElement;
    const inputElement = event.target as HTMLInputElement;
    // if(event.key === 'Backspace' ){
    //   this.flag=1;
    // }
    
   console.log(this.flag1);
   if(event.key === 'Backspace'&& inputElement.value===''){
    prevInput.focus();
    event.defaultPrevented;
   }
    if(event.key === 'Backspace' && prevInput.value && (this.flag>0 || this.flag1>0)){
      console.log('backspace');
      prevInput.focus();
      this.flag=0;
      this.flag1=0;
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let inputValue = input.value;
    inputValue = inputValue.replace(/[^\d]/g, '');
    input.value = inputValue;
    const nextInput = this.el.nativeElement.nextElementSibling as HTMLInputElement;
    const prevInput = this.el.nativeElement.previousElementSibling as HTMLInputElement;
    // if((inputValue as string).length  === 1 && nextInput ){
    //   console.log('not defalt')
    //   nextInput.focus();
  
    // }
    if(inputValue !==''){
      if (nextInput) {
            console.log('next');
            this.flag1=this.flag1+1;
            console.log("value of flag in next :"+" "+this.flag);
            nextInput.focus();
          }
    }
    if(inputValue==='' && prevInput){
      this.flag=this.flag+1;
      console.log('mid');
    }
    else if(inputValue === ''){
      if (prevInput) {
        console.log('prev');
        prevInput.focus();
      }
    }
    
    

  }

  //   if (inputValue === '') {
  //     if (prevInput) {
  //       prevInput.focus();
  //     }
  //   }
  //   else if (nextInput) {
  //     nextInput.focus();
  //   }

  // }
  
}