import { Component } from "@angular/core";

import { DUMMY_USERS } from "./dummy-users";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  currentUserId?: string;

  get currentUser() {
    return this.users.find((user) => user.id === this.currentUserId);
  }

  onUserSelect(id: string) {
    this.currentUserId = id;
  }
}
