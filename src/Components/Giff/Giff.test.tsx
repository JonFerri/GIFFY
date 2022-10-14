import React from "react";
import Giff from "./Giff";
import {fireEvent, render,screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { GiffType } from "Components/ListOfGiffs/ListOfGiffs"

const args: GiffType = { 
    url : "https://media0.giphy.com/media/sLUxwph4pLsy104Krm/giphy-downsized-medium.gif?cid=6c9b9909bxtdnxwrt68mj0sorpvzaq8es2ue6cfsxp9eqhg1&rid=giphy-downsized-medium.gif&ct=g",
    title : "Turn Around",
    id : "sLUxwph4pLsy104Krm",
    height:250,
    width:250
}

test("it renders", async ()=> {
    
    render(<Giff {... args} />)
    
    const img = await screen.findByAltText("giff")
    const h4 = await screen.findByText(/turn/i)
    expect(img).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
    expect(h4).toHaveStyle("color: white")
})

test("img click", async ()=> {
    
    const mockHandler =  jest.fn()
    
    render(<Giff {... args} />)
    
    const img = await screen.findByAltText("giff")
    img.onclick = mockHandler  
    fireEvent.click(img)
    
    expect(mockHandler).toHaveBeenCalledTimes(1)
})