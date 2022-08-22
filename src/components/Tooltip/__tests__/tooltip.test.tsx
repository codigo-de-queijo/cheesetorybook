import { fireEvent, render, screen } from "@testing-library/react";
import { Tooltip } from "../Tooltip";

// TESTING IF Tooltip IS VISIBLE
test("Tooltip text appears", () => {
  render(
    <Tooltip description="It's a Tooltip" direction="top">
      <div data-testid="test">LOL</div>
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId("test"));

  expect(screen.findByText("It's a Tooltip")).toBeTruthy();
});

// TESTING POSITIONS OF TOOLTIP
// TOP
test("Tooltip className is top?", () => {
  const { getByText } = render(
    <Tooltip description="Its a Tooltip" direction="top">
      <div data-testid="test">LOL</div>
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId("test"));
  expect(getByText("Its a Tooltip")).toHaveAttribute("class", "tooltip top");
});

// BOTTOM
test("Tooltip className is bottom?", () => {
  const { getByText } = render(
    <Tooltip description="Its a Tooltip" direction="bottom">
      <div data-testid="test">LOL</div>
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId("test"));
  expect(getByText("Its a Tooltip")).toHaveAttribute("class", "tooltip bottom");
});

// RIGHT
test("Tooltip className is right?", () => {
  const { getByText } = render(
    <Tooltip description="Its a Tooltip" direction="right">
      <div data-testid="test">LOL</div>
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId("test"));
  expect(getByText("Its a Tooltip")).toHaveAttribute("class", "tooltip right");
});

// LEFT
test("Tooltip className is left?", () => {
  const { getByText } = render(
    <Tooltip description="Its a Tooltip" direction="left">
      <div data-testid="test">LOL</div>
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId("test"));
  expect(getByText("Its a Tooltip")).toHaveAttribute("class", "tooltip left");
});
