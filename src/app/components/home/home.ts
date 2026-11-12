import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task';

type Filter = 'all' | 'done' | 'pending';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private taskService = inject(TaskService);
  filter = signal<Filter>('all');

  tasks = computed(() => {
    const all = this.taskService.getTasks();
    const f = this.filter();
    if (f === 'all') return all;
    return all.filter((t) => (f === 'done' ? t.done : !t.done));
  });

  setFilter(f: Filter) {
    this.filter.set(f);
  }
}
