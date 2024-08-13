import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(task: { title: string; description: string }) {
    const newTask: Task = {
      id: Math.random().toString(),
      title: task.title,
      description: task.description,
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  getTasks(taskType: string) {
    if (taskType === 'all') {
      return this.tasks();
    }
    return this.tasks().filter((task) => task.status === taskType);
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: status } : task,
      ),
    );
  }
}
