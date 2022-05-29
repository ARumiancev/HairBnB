/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import { SitterActionType, SittersAction, SittersState } from './sitter-types';

const initialState: SittersState = {
  sitters: [],
  loading: false,
  error: null,
};

const sittersReducer: Reducer<SittersState, SittersAction> = (state = initialState, action) => {
  switch (action.type) {
    case SitterActionType.FETCH_SITTERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case SitterActionType.FETCH_SITTERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        sculptures: action.payload.sitters,
      };
    }

    case SitterActionType.FETCH_SITTERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case SitterActionType.SITTERS_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: return state;
  }
};
export default sittersReducer;
