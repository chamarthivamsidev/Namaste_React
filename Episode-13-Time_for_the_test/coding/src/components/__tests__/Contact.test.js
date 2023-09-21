import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Case", () => {
  //? Info
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside  Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    const button1 = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toHaveLength(2);
    expect(inputBoxes.length).toBe(2);
  });
});
