import { ChangeEvent, useReducer, MouseEvent } from "react";
import { initialState, reducer } from "./reducer";

export const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendDisabled = state.status !== "VALID";

  const edit = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "EDIT", email: e.target.value });

  const send = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "SEND" });
  };

  return (
    <>
      <div>
        <h1>Login Form</h1>
        <form>
          <input value={state.email} onChange={edit} />
          <button onClick={send} disabled={sendDisabled}>
            Login
          </button>
        </form>
      </div>
      <div>
        <h2>Debug View</h2>
        <pre>{JSON.stringify({ state }, null, 2)}</pre>
      </div>
    </>
  );
};
