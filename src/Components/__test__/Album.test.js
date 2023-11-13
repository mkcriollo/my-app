import { render, screen } from "@testing-library/react";
import Albums from "../Albums";
import userEvent from "@testing-library/user-event";

describe("Test the Album Component", () => {
  test("render the instructions on load", () => {
    render(<Albums />);
    const welcomeMsg = screen.getByText("Welcome to BrainScape Album !");
    expect(welcomeMsg).toBeInTheDocument();
  });

  test("on arrow click remove instructions", async () => {
    render(<Albums />);

    const welcomeMsg = screen.getByText("Welcome to BrainScape Album !");
    const arrowUp = screen.getByTestId("arrowup");
    userEvent.click(arrowUp);

    expect(welcomeMsg).not.toBeInTheDocument();
  });
});
