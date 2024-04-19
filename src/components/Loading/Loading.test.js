import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../Loading/index";

describe("Loading Component", () => {
  test("should render without crashing", () => {
    render(<Loading />);
  });

  test("Dog gif should be in the document", () => {
    render(<Loading />);

    const loadingText = screen.getByText(/loading . . ./i);
    const dogImage = screen.getByRole("img", {
      alt: "loading",
      class: "dog-loading",
      src: "dogLoading.gif",
    });

    expect(loadingText).toBeInTheDocument();
    expect(dogImage).toBeInTheDocument();
  });
});
