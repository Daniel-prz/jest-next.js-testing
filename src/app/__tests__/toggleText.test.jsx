// components/__tests__/ToggleText.test.js
import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import ToggleText from "@/app/components/ToggleText";

describe("ToggleText component", () => {
  it("should not display text initially", () => {
    render(<ToggleText />);
    const textElement = screen.queryByText("Hello, World");
    expect(textElement).not.toBeInTheDocument();
  });

  it("should display text when button is clicked", () => {
    render(<ToggleText />);
    const button = screen.getByRole("button", { name: "Toggle" });
    fireEvent.click(button);
    
    const textElement = screen.getByText("Hello, World");
    expect(textElement).toBeInTheDocument();
  });
});
