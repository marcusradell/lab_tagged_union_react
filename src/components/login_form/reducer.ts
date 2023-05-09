export type InitialState = { status: "INITIAL"; email: null };

export type InvalidState = { status: "INVALID"; email: string };

export type ValidState = { status: "VALID"; email: string };

export type State = InitialState | InvalidState | ValidState;

export type Action = { type: "EDIT"; email: string };

export type Reducer = (state: State, action: Action) => State;

export const initialState: InitialState = { status: "INITIAL", email: null };

export const reducer: Reducer = (state, action) => {
  const { email } = action;

  if (email.includes("@") && email.length >= 3)
    return { ...state, status: "VALID", email };

  return { ...state, status: "INVALID", email };
};
