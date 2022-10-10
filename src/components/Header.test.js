import { render, screen } from '@testing-library/react';
import Header from "./Header";

test("redners the edX", () => {
    render(<Header/>);
    expect(screen.getByText("edX")).toBeInTheDocument();
  })

test("redners the Courses, Programms & Degrees, Schools & Partners, Contact", () => {
    render(<Header/>);

    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Programms & Degrees")).toBeInTheDocument();
    expect(screen.getByText("Schools & Partners")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  })

test("check if navigation exists", () => {
    render(<Header/>);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  })
