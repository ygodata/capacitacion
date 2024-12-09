import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  newTask = '';

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
      this.dialog.open(ConfirmationDialogComponent, {
        data: { message: '¡Tarea agregada exitosamente!' }
      });
    }
  }
}
