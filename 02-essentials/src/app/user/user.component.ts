import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // avatar = input.required<string>();
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onUserCardClick() {
    this.select.emit(this.user.id);
  }
}
