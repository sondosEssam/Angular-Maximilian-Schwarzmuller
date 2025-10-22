import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appLinks]',
  standalone: true,
  host:{
    '(click)':'onConfirmLeavePage($event)'
  }
})
export class LinksDirective {
  queryParamter = input('myapp')
  constructor() { }
  onConfirmLeavePage(event:MouseEvent){
    const wants  =window.confirm('Do you want to leave to the app?')
  if(wants)
  {
    const address = (event.target as HTMLAnchorElement).href;
  (event.target as HTMLAnchorElement).href = address+ this.queryParamter()
    return;
  }
  else
    event.preventDefault();
    }
}
