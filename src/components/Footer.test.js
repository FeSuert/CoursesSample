import { render, screen } from '@testing-library/react';
import Footer from "./Footer"

test("check instagram style", async () => {
    render(<Footer/>);
    
    const a = await screen.findByTitle(/Instagram/);
    
    expect(a).toHaveClass('flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900')
  })

test("check facebook style", async () => {
render(<Footer/>);

const a = await screen.findByTitle(/Facebook/);

expect(a).toHaveClass('flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900')
})

test("check twitter style", async () => {
    render(<Footer/>);
    
    const a = await screen.findByTitle(/Twitter/);
    
    expect(a).toHaveClass('flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900')
  })
  