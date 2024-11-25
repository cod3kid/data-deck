// Table.test.js
import { render, screen } from "@testing-library/react";
import Table from "./index";

describe("Table Component", () => {
  const tableHeaders = [
    { label: "Name", value: "name" },
    { label: "Age", value: "age" },
    { label: "Email", value: "email" },
  ];

  const data = [
    { id: 1, name: "Hello", age: 30, email: "hello@example.com" },
    { id: 2, name: "Mello", age: 25, email: "mello@example.com" },
  ];

  it("renders the table component", () => {
    render(<Table listKey="id" data={data} tableHeaders={tableHeaders} />);

    const tableElement = screen.getByRole("table", { name: /data table/i });
    expect(tableElement).toBeInTheDocument();
  });

  it("renders the correct number of headers", () => {
    render(<Table listKey="id" data={data} tableHeaders={tableHeaders} />);

    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(tableHeaders.length);

    tableHeaders.forEach(({ label }, index) => {
      expect(headers[index]).toHaveTextContent(label);
    });
  });

  it("renders the correct number of rows", () => {
    render(<Table listKey="id" data={data} tableHeaders={tableHeaders} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(data.length + 1); // +1 for the header row
  });

  it("renders the correct cell data", () => {
    render(<Table listKey="id" data={data} tableHeaders={tableHeaders} />);

    data.forEach((rowData) => {
      tableHeaders.forEach(({ value }) => {
        expect(
          screen.getByRole("cell", { name: rowData[value].toString() })
        ).toBeInTheDocument();
      });
    });
  });
});
