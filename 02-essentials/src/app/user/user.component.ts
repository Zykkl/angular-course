import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: "app-user",
  standalone: true,
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  @Input({ required: true }) user!: User;
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
