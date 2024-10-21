import { createAction, props } from '@ngrx/store';

export const createToDo = createAction(
  '[ToDo] Crearte ToDo',
  props<{ text: string }>()
);

export const toggleToDo = createAction(
  '[ToDo] Toggle ToDo',
  props<{ id: number }>()
);

export const toggleAllToDos = createAction(
  '[ToDo] Toggle All ToDos',
  props<{ check: boolean }>()
);

export const editToDo = createAction(
  '[ToDo] Edit ToDo',
  props<{ id: number; text: string }>()
);

export const deleteToDo = createAction(
  '[ToDo] Delete ToDo',
  props<{ id: number }>()
);

export const clearCompletedTodos = createAction('[ToDo] Clear Completed ToDos');
