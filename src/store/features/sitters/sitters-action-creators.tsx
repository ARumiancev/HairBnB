import { Dispatch } from 'react';
import { AppAction } from '../../types';
import { CreateSitter, Sitter } from '../../../types';
import { SittersAction, SitterActionType } from './sitter-types';
import SitterService from '../../../services/sitters-api-service';
import pause from '../../../helpers/pause';

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

export const createfetchSittersAction = async (dispatch: Dispatch<AppAction>) => {
  dispatch(createfetchSittersLoadingAction);
  try {
    const sitterPosts = await SitterService.fetchItems();
    await pause(2000);
    dispatch(createFecthSittersSuccessAction(sitterPosts));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthSittersFailureAction = createFecthSittersFailureAction(errMsg);
    dispatch(fecthSittersFailureAction);
  }
};

export const createNewSitterAction = ({
  name, city, email, about, img,
}: CreateSitter) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await SitterService.createNewItem({
    name, city, email, about, img,
  });
  const sitterPosts = await SitterService.fetchItems();
  dispatch(createFecthSittersSuccessAction(sitterPosts));
};
