// DataTable.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "./index";
import useCrowdFundData from "./useCrowdFundData";

// Mock the useCrowdFundData hook
jest.mock("./useCrowdFundData");

const mockCrowdFundData = [
  { "s.no": 1, name: "Project 1", amount: 100 },
  { "s.no": 2, name: "Project 2", amount: 200 },
  { "s.no": 3, name: "Project 3", amount: 300 },
  { "s.no": 4, name: "Project 4", amount: 400 },
  { "s.no": 5, name: "Project 5", amount: 500 },
  { "s.no": 6, name: "Project 6", amount: 600 },
];

const mockTableHeaders = [
  { label: "S. No", value: "s.no" },
  { label: "Name", value: "name" },
  { label: "Amount", value: "amount" },
];

jest.mock("../../../utils/constants", () => ({
  tableHeaders: [
    { label: "S. No", value: "s.no" },
    { label: "Name", value: "name" },
    { label: "Amount", value: "amount" },
  ],
  DATA_PER_PAGE: 5,
}));

describe("DataTable Component", () => {
  it("shows the Spinner while loading", () => {
    useCrowdFundData.mockReturnValue({ crowdFundData: [], isLoading: true });

    render(<DataTable />);

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("renders the table with correct data when loading is complete", () => {
    useCrowdFundData.mockReturnValue({
      crowdFundData: mockCrowdFundData,
      isLoading: false,
    });

    render(<DataTable />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(6); // 1 header row + 5 data rows

    const firstRowCells = screen.getAllByRole("cell", { name: /project 1/i });
    expect(firstRowCells).toHaveLength(1);
  });

  it("renders the pagination component and changes page correctly", () => {
    useCrowdFundData.mockReturnValue({
      crowdFundData: mockCrowdFundData,
      isLoading: false,
    });

    render(<DataTable />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(2); // Only 1 data row on the second page (6th project)
  });
});
