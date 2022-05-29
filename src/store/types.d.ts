import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { NavigationState, NavigationAction } from './features/navigation/navigation-types';
import { SittersState, SittersAction } from './features/sitters/sitter-types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState,
  sitters: SittersState,
};

export type AppAction = AuthAction | NavigationAction | SittersAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
