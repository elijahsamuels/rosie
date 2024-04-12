import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About/index";

describe("About Component", () => {
  test("should render without crashing", () => {
    render(<About />);
  });

  test("Name, Breed, Coat, Tricks, Personality and Mission should be in the document", () => {
    render(<About />);

    const name = screen.getByRole("heading", { name: /name/i });
    const breed = screen.getByRole("heading", { name: /breed/i });
    const coat = screen.getByRole("heading", { name: /coat/i });
    const tricks = screen.getByRole("heading", { name: /tricks/i });
    const personality = screen.getByRole("heading", { name: /personality/i });
    const mission = screen.getByRole("heading", { name: /mission/i });

    expect(name).toBeInTheDocument();
    expect(breed).toBeInTheDocument();
    expect(coat).toBeInTheDocument();
    expect(tricks).toBeInTheDocument();
    expect(personality).toBeInTheDocument();
    expect(mission).toBeInTheDocument();
  });
});
