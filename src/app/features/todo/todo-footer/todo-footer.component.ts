import { AsyncPipe, CommonModule, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store/app.reducer';
import { selectFilter } from '../../../store/filter/filter.selector';
import { Filter } from '../../../types/filter.type';
import { selectPendingTodos } from '../../../store/todos/todo.selector';
import * as actionsFilter from '../../../store/filter/filter.actions';
import * as actionsTodos from '../../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [AsyncPipe, CommonModule, TitleCasePipe],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss',
})
export class TodoFooterComponent {
  actualFilter!: Filter;
  filters: Filter[] = ['ALL', 'PENDING', 'COMPLETED'];
  pendingTodos$!: Observable<number>;

  private store: Store<AppState> = inject(Store);

  ngOnInit(): void {
    this.setActualFilter();
    this.pendingTodos$ = this.store.select(selectPendingTodos);
  }

  onChangeFilter(filter: Filter) {
    this.store.dispatch(actionsFilter.setFilter({ filter }));
  }

  onClearCompleted() {
    this.store.dispatch(actionsTodos.clearCompletedTodos());
  }

  private setActualFilter() {
    this.store
      .select(selectFilter)
      .subscribe((value) => (this.actualFilter = value));
  }
}
