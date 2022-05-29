import { Sitter } from '../../../types';

export type SittersState = {
  sculptures: Sitter[],
  loading: boolean,
  error: string | null,
};

export enum SitterActionType {
  FETCH_SITTERS_LOADING = 'FETCH_SITTERS_LOADING',
  FETCH_SITTERS_SUCCESS = 'FETCH_SITTERS_SUCCESS',
  FETCH_SITTERS_FAILURE = 'FETCH_SITTERS_FAILURE',
  SITTERS_CLEAR_ERROR = 'SITTERS_CLEAR_ERROR',
  NEW_SITTER = 'NEW_SITTER',

}

export type FetchSittersLoadingAction = {
  type: SitterActionType.FETCH_SITTERS_LOADING
};

export type FetchSittersSuccessAction = {
  type: SitterActionType.FETCH_SITTERS_SUCCESS
  payload: {
    sitters: Sitter[],
  }
};
export type FetchSittersFailureAction = {
  type: SitterActionType.FETCH_SITTERS_FAILURE
  payload: {
    error: string,
  }
};

export type SittersClearErrorAction = {
  type: SitterActionType.SITTERS_CLEAR_ERROR
};

export type CreatNewSitterAction = {
  type: SitterActionType.NEW_SITTER
};

export type SittersAction =
  FetchSittersLoadingAction |
  FetchSittersSuccessAction |
  FetchSittersFailureAction |
  SittersClearErrorAction |
  CreatNewSitterAction;
