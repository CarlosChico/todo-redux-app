import { Action, createReducer, on } from '@ngrx/store';
import { Filter } from '../../types/filter.type';
import * as actions from './filter.actions';

export const initialState: Filter = 'ALL';

const _filterReducer = createReducer<Filter, Action>(
  initialState,
  on(actions.setFilter, (state, { filter }) => filter)
);

export const filterReducer = (state: Filter = initialState, action: Action) =>
  _filterReducer(state, action);
