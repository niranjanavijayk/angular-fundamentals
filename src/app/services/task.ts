import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Learn Angular', done: true },
    { id: 2, title: 'Build the assessment app', done: false },
    { id: 3, title: 'Push to GitHub', done: false },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
}
