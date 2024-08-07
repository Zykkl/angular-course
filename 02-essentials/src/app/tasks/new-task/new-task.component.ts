import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTaskData } from "../task/task.model";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Output() cancelled = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<NewTaskData>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  onCancel() {
    this.cancelled.emit();
  }

  onSubmit() {
    this.submitted.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    });
  }
}
