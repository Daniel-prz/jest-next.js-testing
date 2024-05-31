import { render, screen } from "@testing-library/react";
import WelcomeMessage from "@/app/components/WelcomeMessage";
import "@testing-library/jest-dom";

test("renders welcome message correctly", () => {
  render(<WelcomeMessage user="User" />);

  const messageElement = screen.getByText("Welcome, User!");
  expect(messageElement).toBeInTheDocument();
});
