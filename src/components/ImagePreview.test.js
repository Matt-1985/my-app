import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview author="Matti" />, div);
});

test("render author", () => {
  render(<ImagePreview author="Matti" />);
  const author = screen.getByText(/Author: Matti/i);
  expect(author).toBeInTheDocument();
});
