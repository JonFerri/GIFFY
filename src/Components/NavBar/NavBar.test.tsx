import NavBar from "./NavBar";
import { render, screen } from '@testing-library/react';

test("giff renders", async () => {
    
    render(<NavBar />)
    const home = await screen.findByText(/home/i)
    expect(home).toBeInTheDocument()
})
