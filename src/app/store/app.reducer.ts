import { ActionReducerMap } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { Filter } from '../types/filter.type';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: Filter;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
