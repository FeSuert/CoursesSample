import { render, screen } from '@testing-library/react';
import Card from "./Card"

test("redners the card", () => {
   render(<Card href="google.com"/>);
   expect(screen.getByRole("img")).toBeInTheDocument();
 })

test("should render text component", () => {
    render(<Card />);
    var linkElem = screen.getByTestId("link");
    expect(linkElem).toBeInTheDocument();
  });

test("component has the same name", () => {
    render(<Card name="name"/>);
    expect(screen.getByTestId("name")).toHaveTextContent("name")
  });