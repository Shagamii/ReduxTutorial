import { actionType } from '../actionTypes';

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}