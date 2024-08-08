import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { SupportTicketsService } from '../support-tickets.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  title = '';
  description = '';
  private ticketService = inject(SupportTicketsService); // TODO throws NullInjectionError

  onSubmit() {
    console.log({
      title: this.title,
      description: this.description,
    });
  }
}
