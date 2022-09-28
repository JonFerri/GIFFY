import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useForm from "./hooks";

test("should change keyword", ()=> {
    const { result } = renderHook(()=> useForm({initialKeyword: "kilo",initialLang:"en",initialLimit:5}))
    
    act(()=> {
        result.current.updateTextInput("batman")
    })
    expect(result.current.textInput).toBe("batman")
})
test("should change limit", ()=> {
    const { result } = renderHook(()=> useForm({initialKeyword: "kilo",initialLang:"en",initialLimit:5}))
    
    act(()=> {
        result.current.updateLimit(1000)
    })
    expect(result.current.limit).toBe(1000)
})
test("should change lang", ()=> {
    const { result } = renderHook(()=> useForm({initialKeyword: "kilo",initialLang:"en",initialLimit:5}))
    
    act(()=> {
        result.current.updateLang("es")
    })
    expect(result.current.lang).toBe("es")
})