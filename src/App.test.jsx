import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it("should update selected material on click", () => {
    render(<App />);

    // Initially, only Material-1 is active
    const material1 = screen.getByTestId("material-1");
    expect(material1).toBeInTheDocument();

    // Click on Material-2
    const material2 = screen.getByTestId("material-2");
    fireEvent.click(material2);
  });
});
