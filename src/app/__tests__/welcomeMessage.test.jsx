import { cleanup, getByText, render, screen } from "@testing-library/react";
import WelcomeMessage from "@/app/components/WelcomeMessage";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("renders welcome message correctly", async () => {
  const { getByText } = await render(<WelcomeMessage user="User" />);

  const messageElement = screen.getByText("Welcome, User!");
  expect(messageElement).toBeInTheDocument();
});
