import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideBar from "./SideBar";

describe("sidebar component", () => {
  render(<SideBar />);
  it("Heading renders", () => {
    const heading = screen.getByText("Material Selection");
    expect(heading).toBeInTheDocument();
  });
});

const mockMaterial = [
  { id: 1, text: "Material-1", img: "image-1.jpg", on: true },
  { id: 2, text: "Material-2", img: "image-2.jpg", on: false },
];

describe("sidebar component", () => {
  it("should render list of items", () => {
    render(<SideBar material={mockMaterial} updatematerial={vi.fn()} />);
    expect(screen.getByText("Material-1")).toBeInTheDocument();
    expect(screen.getByText("Material-2")).toBeInTheDocument();
  });

  it("should call updatematerial when clicked", () => {
    const mockUpdate = vi.fn();
    render(<SideBar material={mockMaterial} updatematerial={mockUpdate} />);
    const item = screen.getByTestId("material-1");
    fireEvent.click(item);

    expect(mockUpdate).toHaveBeenCalledWith(1);
  });
});
