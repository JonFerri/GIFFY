import { useEffect, useContext, useReducer, useCallback } from "react"
import GetGiffs from "../../Services/GetGiffs"
import { GiffContext } from "../../Context/GiffContext"
import { INITIAL_VALUES, reducer } from "./reducerControllers"

interface useGiffsParams  {
  keyword:string
  limit?: number
  lang?: "es" | "en" 

}

function useGiffs({ keyword, limit, lang }: useGiffsParams) {
  const { giffs, setGiffs } = useContext(GiffContext)

  //useReducer
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    reducer,
    INITIAL_VALUES
  )
  const { isRandom, isLoading, page } = state

  useEffect(() => {
    dispatch({ type: "setIsLoading", payload: { value: true } })
    GetGiffs({ keyword, limit, lang }).then(res => {
      setGiffs(res)
      dispatch({ type: "setIsLoading", payload: { value: false } })
      if (keyword === "random")
        dispatch({ type: "setIsRandom", payload: { value: true } })
      localStorage.setItem("lastKeyword", keyword)
    })
  }, [keyword, lang, limit, setGiffs])

  useEffect(() => {
    if (page === 1) return

    dispatch({ type: "setIsLoading", payload: { value: true } })
    GetGiffs({ keyword, limit, lang, page }).then(res => {
      setGiffs(prevGiffs => prevGiffs.concat(res))
      dispatch({ type: "setIsLoading", payload: { value: false } })
    })
  }, [keyword, lang, limit, page, setGiffs])

  const setPage = useCallback(() => {
    dispatch({ type: "setPage" })
  }, [])

  return { giffs, isLoading, isRandom, keyword, page, setPage }
}

export default useGiffs
