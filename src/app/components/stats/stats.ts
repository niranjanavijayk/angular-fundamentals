import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-stats',
  imports: [RouterLink],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  private taskService = inject(TaskService);

  private tasks = this.taskService.getTasks();
  total = this.tasks.length;
  done = this.tasks.filter((t) => t.done).length;
  pending = this.total - this.done;
  percent = this.total > 0 ? Math.round((this.done / this.total) * 100) : 0;

  cards = [
    { label: 'Total', value: this.total, kind: 'total' },
    { label: 'Done', value: this.done, kind: 'done' },
    { label: 'Pending', value: this.pending, kind: 'pending' },
  ];
}
