import { Component, computed, inject, input } from "@angular/core";

import { RouterLink } from "@angular/router";
import { TaskComponent } from "./task/task.component";
import { TasksService } from "./tasks.service";

@Component({
  selector: "app-tasks",
  standalone: true,
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  order = input<"asc" | "desc">("desc");
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === "asc") {
          return a.dueDate > b.dueDate ? 1 : -1;
        } else {
          return a.dueDate > b.dueDate ? -1 : 1;
        }
      })
  );
}
