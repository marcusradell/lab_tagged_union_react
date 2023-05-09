import { Action, reducer, initialState } from "./reducer";

test("Empty form becomes invalid when adding a letter", () => {
  const edit: Action = { type: "EDIT", email: "d" };

  const result = [edit].reduce(reducer, initialState);

  expect(result).toEqual({ status: "INVALID", email: "d" });
});
