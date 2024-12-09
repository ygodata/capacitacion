import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { name: string; completed: boolean }[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
  }

  completeTask(index: number) {
    this.tasks[index].completed = true;
  }
}
