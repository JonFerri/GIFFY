import { act, renderHook } from "@testing-library/react"
import useGiffs from "./useGiffs"

test("'setPage' method increases 'page' by 1", async ()=> {
    const {result} = renderHook(()=> useGiffs({keyword:"panda",limit:20,lang:"es"}))
    const currentPage = result.current.page
    act(()=> {
        result.current.setPage()
    })
    expect(result.current.page).toBe(currentPage + 1)
})

test("empty keyword", async ()=> {
    const {result} = renderHook(()=> useGiffs({keyword:"",limit:20,lang:"es"}))
     
    
    expect(result.current.giffs).toBe(undefined)
})

