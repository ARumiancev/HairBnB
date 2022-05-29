import { RootState } from '../../types';

export const selectSittersLoading = (state: RootState) => state.sitters.loading;

export const selectSitters = (state: RootState) => state.sitters.sitters;

export const selectSittersError = (state: RootState) => state.sitters.error;
