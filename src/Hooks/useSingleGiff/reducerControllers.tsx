import { StateType } from "types"


const dispatchController = {
  setGiff(prevState: StateType, action: any): StateType {
    return {
      ...prevState,
      giff: action.payload.giff,
    }
  },
  setIsLoading(prevState: StateType, action: any): StateType {
    return {
      ...prevState,
      isLoading: action.payload.isLoading,
    }
  },
  setIsError(prevState: StateType, action: any): StateType {
    return {
      ...prevState,
      isError: action.payload.isError,
    }
  },
}

type ControllerKeys = keyof typeof dispatchController
type SingleGiffReducerAction = {
  type: ControllerKeys
  payload: any 
}

//type SingleGiffReducer<S, A> = (prevState: S, action: A) => S

export const reducer: React.Reducer<StateType, SingleGiffReducerAction> = (
  prevState: StateType,
  action: any
) => {
  const type: ControllerKeys = action.type
  return dispatchController[type](prevState, action)
}
