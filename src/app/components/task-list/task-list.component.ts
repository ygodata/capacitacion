import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    RouterLink,
    MatButton
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: { name: string; completed: boolean }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    console.log('test')
  }

  completeTask(index: number) {
    this.taskService.completeTask(index);
  }
}
