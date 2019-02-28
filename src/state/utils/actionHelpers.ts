import { Action, ActionCreatorsMapObject} from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload?: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}
export type ThunkResult<R> = ThunkAction<R, State, undefined, Action | ActionWithPayload<string, any>>;

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
