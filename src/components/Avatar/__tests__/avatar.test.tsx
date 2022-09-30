import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "../Avatar";

// TESTING IF Avatar alt text IS VISIBLE
test("Avatar alt text appears?", () => {
  const { getByText } = render(<Avatar format="square" name="Raul Henrique" src="" size="small" />);
  expect(getByText("RH"));
});

// TESTING IF Avatar url IS TRUE
test("Avatar has an URL in?", () => {
  const { getByText } = render(<Avatar format="square" name="Raul Henrique" src="" size="small" />);
});
