import { render, screen } from "@testing-library/react";
import Button from "./button.component";
import { describe, it, expect } from "vitest";

describe("Button Component", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Button label="Click Me" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show with disabled state", () => {
    render(<Button label="Click Me" disabled />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });
});
