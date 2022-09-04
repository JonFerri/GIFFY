import NavBar from "./NavBar";
import { render, screen } from '@testing-library/react';

test("NavBar renders", async () => {
    
    render(<NavBar />)
    const home = await screen.findByText(/home/i)
    expect(home).toBeInTheDocument()
})
