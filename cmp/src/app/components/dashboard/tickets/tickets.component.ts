import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ITicket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
tickets :ITicket [] =[];
addTicket(ticketData:{title:string, text:string}){
let newTicket:ITicket ={
  id : `t${this.tickets.length +1}`,
  title:ticketData.title,
  request:ticketData.text,
  status:'open'
}
this.tickets.unshift(newTicket);
}
onCloseTicket(id:string){
  this.tickets = this.tickets.map((ticket)=>{
    if(ticket.id === id){
      return {...ticket, status:'close'}
    }
    else
      return ticket
  })
}
}
