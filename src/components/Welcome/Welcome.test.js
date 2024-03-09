import React from 'react';
import { screen, render } from '@testing-library/react';
import Welcome from '../Welcome/index';

describe("Welcome Component", () => {
  test("should render without crashing", () => {
    render(<Welcome />);
  });

	test('should render the welcome message', () => {
    render(<Welcome />);
    const welcomeMessage = screen.getByText('Welcome');
    expect(welcomeMessage).toBeInTheDocument();
  });


  // test("should render the image", () => {
	// 	const rosieImg = screen.getByRole("img", {
  //     alt: "Rosie",
  //   });

  //   expect(rosieImg).toBeInTheDocument();
  // });

  // test("should render the correct image source", () => {
  //   expect(screen.getByAltText("Rosie").src).toContain("Rosie2.png");
  // });

  // test("should render the correct alt text for the image", () => {
  //   expect(screen.getByAltText("Rosie")).toHaveAttribute("alt", "Rosie");
  // });

});
