import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../../models/todo.model';
import { AppState } from '../../../store/app.reducer';
import { selectTodos } from '../../../store/todos/todo.selector';
import { FilterTodoPipe } from '../../../shared/pipes/filter.pipe';
import { Filter } from '../../../types/filter.type';
import { selectFilter } from '../../../store/filter/filter.selector';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FilterTodoPipe, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  actualFilter!: Filter;

  private store: Store<AppState> = inject(Store);

  constructor() {
    this.store.subscribe(({ todos, filter }) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

  ngOnInit(): void {}
}
