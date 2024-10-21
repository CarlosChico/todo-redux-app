import { Filter } from '../../types/filter.type';

export const selectFilter = (state: { filter: Filter }) => state.filter;
