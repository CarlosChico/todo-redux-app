import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './todo.actions';
import { Todo } from '../../models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
];

const _todoReducer = createReducer<Todo[], Action>(
  initialState,

  on(actions.createToDo, (state, { text }) => [...state, new Todo(text)]),

  on(actions.deleteToDo, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),

  on(actions.toggleToDo, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  ),

  on(actions.toggleAllToDos, (state, { check }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: check,
      };
    });
  }),

  on(actions.editToDo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }
      return todo;
    });
  }),

  on(actions.clearCompletedTodos, (state) =>
    state.filter((todo) => !todo.completed)
  )
);

export const todoReducer = (state: Todo[] = initialState, action: Action) =>
  _todoReducer(state, action);
