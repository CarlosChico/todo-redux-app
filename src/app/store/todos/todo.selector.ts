import { createSelector } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { Filter } from '../../types/filter.type';

export const selectTodos = (state: { todos: Todo[] }) => state.todos;
export const selectPendingTodos = createSelector(
  selectTodos,
  (state: Todo[]) => state.filter((todo) => todo.completed === false).length
);

export const selectTodosFiltered = createSelector(
  selectTodos,
  (state: Todo[], filter: Filter) => {
    filter === 'COMPLETED'
      ? state.filter((todo) => todo.completed)
      : filter === 'PENDING'
      ? state.filter((todo) => !todo.completed)
      : state;
  }
);
