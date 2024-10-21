import { createAction, props } from '@ngrx/store';
import { Filter } from '../../types/filter.type';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: Filter }>()
);
