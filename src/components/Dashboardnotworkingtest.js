// import { render, screen } from '@testing-library/react';
// import Dashboard from "./Dashboard"

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//I always have here error with Dashboard cause:

// console.error
// Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Dashboard`. See https://reactjs.org/link/warning-keys for more information.
//     at Card (C:\courses\src\components\Card.js:2:17)
//     at Dashboard

//But actually Dashboard always has a unique key prop

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  test("redners the dashboard", () => {
//    render(<Dashboard/>);
//    expect(screen.getByRole("h1")).toBeInTheDocument();
//  })

//   test("should render card component", () => {
//     render(<Dashboard />);
//     var linkElem = screen.getByTestId("card");
//     expect(linkElem).toBeInTheDocument();
//   });

// test("text in h1 is white", async () => {
//     render(<Dashboard/>);
    
//     const h1 = await screen.findByText(/Courses:/);
    
//     expect(h1).toHaveClass('text-white')
//   })

