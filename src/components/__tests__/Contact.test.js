import { render, screen } from "@testing-library/react"; // Import screen
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("should load contact us components", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact components", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  // Assertion
  expect(button).toBeInTheDocument();
});
