import { Injectable } from '@angular/core';
import {Task, TaskStatus} from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks(taskType?: TaskStatus) {
    if (!taskType) {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === taskType);
  }
}
