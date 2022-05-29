import { Dispatch } from 'react';
import { AppAction } from '../../types';
import { CreateSitter, Sitter } from '../../../types';
import { SittersAction, SitterActionType } from './sitter-types';
import SitterService from '../../../services/sitters-api-service';

export const createfetchSittersLoadingAction: SittersAction = ({
  type: SitterActionType.FETCH_SITTERS_LOADING,
});

export const createFecthSittersSuccessAction = (sitters: Sitter[]): SittersAction => ({
  type: SitterActionType.FETCH_SITTERS_SUCCESS,
  payload: { sitters },
});

export const createFecthSittersFailureAction = (error: string): SittersAction => ({
  type: SitterActionType.FETCH_SITTERS_FAILURE,
  payload: { error },
});

export const sittersClearErrorAction: SittersAction = ({
  type: SitterActionType.SITTERS_CLEAR_ERROR,
});

export const createNewSitterAction = ({
  name, city, about,
}: CreateSitter) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await SitterService.createNewItem({
    name, city, about,
  });
  const sitterPosts = await SitterService.fetchItems();
  dispatch(createFecthSittersSuccessAction(sitterPosts));
};
