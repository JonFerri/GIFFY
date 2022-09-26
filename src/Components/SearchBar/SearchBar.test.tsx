import React from "react";
import SearchBar from "./SearchBar";
import {Langs} from "./reducerController"
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

test("SearchBar renders.", async ()=>{
    
    type Args = {
        initialLimit: number
        initialLang: Langs
        initialKeyword: string
    }
    const args: Args = {
        initialLimit: 5,
        initialLang: "en",
        initialKeyword: "panda"
    }
    
    render(<SearchBar {...args}/>)

    const homeIcon = await screen.findByPlaceholderText<HTMLInputElement>(/find/i)

    expect(homeIcon).toBeInTheDocument()
})
