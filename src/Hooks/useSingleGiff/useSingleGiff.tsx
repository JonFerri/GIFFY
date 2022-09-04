import { useCallback, useContext, useEffect, useReducer } from "react"
import getSingleGiff from "Services/GetSingleGiff"
import { GiffContext } from "Context/GiffContext"
import {GiffProps} from "types"
import { reducer } from "Hooks/useSingleGiff/reducerControllers"

export default function useSingleGiff(id: string) {

  const { giffs } = useContext(GiffContext)

  //Checks if there are giffs in the context and brings the matching giff
  const inheritGiff: GiffProps = giffs.find(giff => giff.id === id)!

  const initialState = useCallback(()=> {
    return {
      giff: inheritGiff,
      isLoading: false,
      isError: false,
    }
  },[inheritGiff]) 

  const [state, dispatch] = useReducer(reducer, initialState())

  useEffect(() => {
    if (!state.giff) {
      dispatch({ type: "setIsLoading", payload: { isLoading: true } })
      getSingleGiff(id)
        .then(fetchedGiff => {
          dispatch({ type: "setGiff", payload: { giff: fetchedGiff } })
          dispatch({ type: "setIsLoading", payload: { isLoading: false } })
          dispatch({ type: "setIsError", payload: { isError: false } })
        })
        .catch(error => {
          dispatch({ type: "setIsLoading", payload: { isLoading: false } })
          dispatch({ type: "setIsError", payload: { isError: true } })
        })
    }
  }, [id, state.giff])

  const { giff, isLoading, isError } = state
  
  return { giff, isLoading, isError }

}
