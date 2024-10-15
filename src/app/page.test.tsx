import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("Click on link", () => {
    render(<Page />);

    const link = screen.getByText("About");

    expect(() => fireEvent.click(link)).not.toThrow();
  });
});
