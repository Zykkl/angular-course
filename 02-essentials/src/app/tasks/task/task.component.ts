import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { CardComponent } from "../../shared/card/card.component";
import { Task } from "./task.model";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() onTaskComplete = new EventEmitter<string>();

  onCompleteTask() {
    this.onTaskComplete.emit(this.task.id);
  }
}
