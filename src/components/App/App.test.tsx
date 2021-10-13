import { render, screen } from "@testing-library/react";
import { AppStateProvider } from "../App";
import { App } from "./App";

describe("App tests", () => {
  test("renders Rick & Morty Party", () => {
    render(
      <AppStateProvider>
        <App />
      </AppStateProvider>
    );
    const appComp = screen.getByTestId("App");
    expect(appComp).toBeInTheDocument();
  });
});
