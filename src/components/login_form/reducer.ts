export type InitialState = { status: "INITIAL"; email: null };

export type InvalidState = { status: "INVALID"; email: string };

export type State = InitialState | InvalidState;

export type Action = { type: "EDIT"; email: string };

export type Reducer = (state: State, action: Action) => State;

export const initialState: InitialState = { status: "INITIAL", email: null };

export const reducer: Reducer = (state, action) => {
  return { ...state, status: "INVALID", email: action.email };
};
