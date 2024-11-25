import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click Me" />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards additional props to the button element", () => {
    render(<Button label="Click Me" data-testid="custom-button" />);

    const buttonElement = screen.getByTestId("custom-button");
    expect(buttonElement).toBeInTheDocument();
  });
});
