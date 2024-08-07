import { Component, Input } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  dummyTasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary:
        "Learn all the basic and advanced features of Angular & how to apply them.",
      dueDate: "2025-12-31",
    },
    {
      id: "t2",
      userId: "u3",
      title: "Build first prototype",
      summary: "Build a first prototype of the online shop website",
      dueDate: "2024-05-31",
    },
    {
      id: "t3",
      userId: "u3",
      title: "Prepare issue template",
      summary:
        "Prepare and describe an issue template which will help with project management",
      dueDate: "2024-06-15",
    },
  ];

  get userTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  onTaskComplete(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
