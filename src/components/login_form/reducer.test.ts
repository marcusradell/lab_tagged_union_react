import { Action, reducer, initialState } from "./reducer";

test("Empty form becomes invalid when adding a letter", () => {
  const edit: Action = { type: "EDIT", email: "d" };

  const result = [edit].reduce(reducer, initialState);

  expect(result).toEqual({ status: "INVALID", email: "d" });
});

test("Invalid form becomes valid when email has a @ and length of 3 characters", () => {
  const editInvalidEmail: Action = { type: "EDIT", email: "a" };
  const editValidEmail: Action = { type: "EDIT", email: "a@b" };

  const result = [editInvalidEmail, editValidEmail].reduce(
    reducer,
    initialState
  );

  expect(result).toEqual({ status: "VALID", email: "a@b" });
});
