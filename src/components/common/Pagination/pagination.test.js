// Pagination.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./index.js";

describe("Pagination Component", () => {
  it("renders the Previous and Next buttons", () => {
    render(
      <Pagination currentPage={1} setCurrentPage={jest.fn()} totalPages={5} />
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    const nextButton = screen.getByRole("button", { name: /next page/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("calls setCurrentPage with the correct page when Next is clicked", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPageMock}
        totalPages={5}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(2);
  });

  it("calls setCurrentPage with the correct page when Previous is clicked", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <Pagination
        currentPage={2}
        setCurrentPage={setCurrentPageMock}
        totalPages={5}
      />
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);

    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });

  it("does not call setCurrentPage when clicking Next on the last page", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <Pagination
        currentPage={5}
        setCurrentPage={setCurrentPageMock}
        totalPages={5}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);

    expect(setCurrentPageMock).not.toHaveBeenCalled();
  });

  it("does not call setCurrentPage when clicking Previous on the first page", () => {
    const setCurrentPageMock = jest.fn();
    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPageMock}
        totalPages={5}
      />
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);

    expect(setCurrentPageMock).not.toHaveBeenCalled();
  });
});
