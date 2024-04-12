import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/index";

describe("Footer Component", () => {
  test("should render without crashing", () => {
    render(<Footer />);
  });

  test("Copyright should be in the document", () => {
    render(<Footer />);

		const date = new Date()
		const year = date.getFullYear()

    const copyright = screen.getByText(`© ${year}`)
    const elijahSamuels = screen.getByRole("link", { name: /elijah samuels/i });

    expect(copyright).toBeInTheDocument();
    expect(elijahSamuels).toBeInTheDocument();
		
  });

});
