import { render, screen } from "@testing-library/react";
import Spinner from "./index.js";

describe("Spinner Component", () => {
  it("renders the spinner component", () => {
    render(<Spinner />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("has the correct class name for styling", () => {
    render(<Spinner />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("spinner");
  });
});
