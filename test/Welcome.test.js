import React from "react";
import { screen, render } from "@testing-library/react";
import Welcome from "..src/Welcome";

describe("Welcome Component", () => {
  test("should render without crashing", () => {
    render(<Welcome />);
  });

  const welcome = screen.getByText(/welcome/i);

  test("should render the welcome message", () => {
    expect(welcome).toBeInTheDocument();
  });

  // test("should render the image", () => {
  //   expect(
  //     screen.getByRole("img", {
  //       name: /rosie/i,
  //     })
  //   ).toBeInTheDocument();
  // });

  // test("should render the correct image source", () => {
  //   expect(screen.getByAltText("Rosie").src).toContain("Rosie2.png");
  // });

  // test("should render the correct alt text for the image", () => {
  //   expect(screen.getByAltText("Rosie")).toHaveAttribute("alt", "Rosie");
  // });

});
