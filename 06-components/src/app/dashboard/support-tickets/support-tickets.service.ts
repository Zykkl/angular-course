import { Injectable } from '@angular/core';
import { Ticket } from './ticket/ticket.model';

@Injectable({ providedIn: 'root' })
export class SupportTicketsService {
  tickets: Ticket[] = [];

  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  getTickets() {
    return this.tickets;
  }
}
