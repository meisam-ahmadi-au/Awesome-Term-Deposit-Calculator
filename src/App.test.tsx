import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("matches the snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test("renders initial UI correctly and disables calculate button", () => {
    render(<App />);

    expect(screen.getByLabelText(/start deposit amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/interest rate/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/investment term/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/interest paid/i)).toBeInTheDocument();
    const calculateButton = screen.getByRole("button", { name: /calculate/i });
    expect(calculateButton).toBeDisabled();
  });

  test("enables the calculate button when valid inputs are provided", () => {
    render(<App />);

    const depositAmountInput = screen.getByLabelText(/start deposit amount/i);
    const interestRateInput = screen.getByLabelText(/interest rate/i);
    const investmentTermInput = screen.getByLabelText(/investment term/i);

    fireEvent.change(depositAmountInput, { target: { value: 10000 } });
    fireEvent.change(interestRateInput, { target: { value: 1.5 } });
    fireEvent.change(investmentTermInput, { target: { value: 3 } });

    const calculateButton = screen.getByRole("button", { name: /calculate/i });
    expect(calculateButton).not.toBeDisabled();
    fireEvent.click(calculateButton);
    const finalBalance = screen.getByText(/final balance/i);
    expect(finalBalance).toBeInTheDocument();
    expect(finalBalance).toHaveTextContent(/\$10456/);
  });

  test("show feedback to user", () => {
    render(<App />);
    const depositAmountInput = screen.getByLabelText(/start deposit amount/i);
    fireEvent.change(depositAmountInput, { target: { value: "1222w" } });
    const errorMessage = screen.getByText(/Please enter a valid number/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
