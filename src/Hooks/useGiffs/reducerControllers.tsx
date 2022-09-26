export interface StateReducer {
  isRandom: boolean
  isLoading: boolean
  page: number
}
export const INITIAL_VALUES: StateReducer = {
  isRandom: false,
  isLoading: false,
  page: 1,
}

const reducerController = {
  setIsRandom: (prevState: StateReducer, action: any): StateReducer => {
    return {
      ...prevState,
      isRandom: action.payload.value,
    }
  },
  setIsLoading: (prevState: StateReducer, action: any): StateReducer => {
    return {
      ...prevState,
      isLoading: action.payload.value,
    }
  },
  setPage: (prevState: StateReducer, action: any): StateReducer => {
    return {
      ...prevState,
      page: prevState.page + 1,
    }
  },
}

type ControllerMethodsTypes = keyof typeof reducerController
type GiffsReducer<S, A> = (prevState: S, action: A) => S

export type GiffReducerAction = {
    type: ControllerMethodsTypes
    payload: any
}

export const reducer: GiffsReducer<StateReducer, GiffReducerAction> = (
  currentState: StateReducer,
  action: GiffReducerAction
) => {
  const type: ControllerMethodsTypes = action.type
  return reducerController[type](currentState, action)
}
