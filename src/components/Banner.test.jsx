import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";

describe("Banner component", () => {
  it("Heading loads", () => {
    render(<Banner />);
    const heading = screen.getByText("Distance for Circle");
    expect(heading).toBeInTheDocument();
  });

  it("update input value and submit", () => {
    const mock = vi.fn();
    render(<Banner onSubmit={mock} />);

    const inputX = screen.getByLabelText(/X/i);
    fireEvent.change(inputX, { target: { value: 1 } });
    expect(inputX.value).toBe("1");

    const inputY = screen.getByLabelText(/Y/i);
    fireEvent.change(inputY, { target: { value: 1 } });
    expect(inputY.value).toBe("1");
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
  });
});
