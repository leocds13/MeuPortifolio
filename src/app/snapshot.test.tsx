import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("renders a heading", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
