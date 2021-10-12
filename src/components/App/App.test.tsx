import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders Rick & Morty Party", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rick & Morty Party/i);
  expect(linkElement).toBeInTheDocument();
});
