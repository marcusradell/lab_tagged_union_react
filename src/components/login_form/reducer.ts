export type InitialState = { status: "INITIAL"; email: null };

export type InvalidState = { status: "INVALID"; email: string };

export type ValidState = { status: "VALID"; email: string };

export type LoadingState = { status: "LOADING"; email: string };

export type State = InitialState | InvalidState | ValidState | LoadingState;

export type EditAction = { type: "EDIT"; email: string };

export type SendAction = { type: "SEND" };

export type Action = EditAction | SendAction;

export type Reducer = (state: State, action: Action) => State;

export const initialState: InitialState = { status: "INITIAL", email: null };

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "EDIT": {
      const { email } = action;
      if (email.includes("@") && email.length >= 3)
        return { ...state, status: "VALID", email };

      return { ...state, status: "INVALID", email };
    }
    case "SEND": {
      // We choose to ignore bad status transitions
      if (state.status !== "VALID") return state;

      return { ...state, status: "LOADING" };
    }
  }
};
