import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders data table", () => {
  render(<App />);
  const headerText = screen.getByText(/data deck/i);
  expect(headerText).toBeInTheDocument();
});
