import { Component, input, output, signal } from '@angular/core';
import { ITicket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data = input.required<ITicket>();
detailsVisiable = signal(true);
close = output();
onToggleDetails(){
  this.detailsVisiable.update((wasVisible)=>!wasVisible);

}
onMarkAsComplelted(){
  this.close.emit()
}
}
