import React from "react";
import { render, screen } from "@testing-library/react";
import Media from "../Media/index";
import { mediaData } from "./mediaData.js";

describe("Media Component", () => {
  test("renders without crashing", () => {
    render(<Media />);
  });
	
  test("renders the page title", () => {
		render(<Media />);
    const pageTitle = screen.getByText("Media");
    expect(pageTitle).toBeInTheDocument();
  });
	
  test("renders media cards for each item in mediaData", () => {
		render(<Media />);
		const mediaCards = document.getElementsByClassName('media-card')
    expect(mediaCards.length).toBe(mediaData.length);
  });

});
