import { Component, computed, inject, input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
})
export class UserTasksComponent {
  private usersService = inject(UsersService);
  userId = input.required<string>();

  userName = computed(
    () =>
      this.usersService.users.find((user) => user.id === this.userId())?.name
  );
}
