import { Component, ElementRef, output, Output, ViewChild } from '@angular/core';
import { ButtomComponent } from "../../../../shared/components/buttom/buttom.component";
import { ControlComponent } from "../../../../shared/components/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtomComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
@ViewChild('form') form?:ElementRef<HTMLFormElement>;

add = output<{title:string,text:string}>();
onSubmit(title:string, text:string){
console.log(title, text);
this.add.emit({title,text})

this.form?.nativeElement.reset()
}
}
