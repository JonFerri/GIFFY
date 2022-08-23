import { useState, useEffect, useContext,useReducer } from "react";
import GetGiffs from "../Services/GetGiffs";
import { GiffContext } from "../Context/GiffContext";


function useGiffs(keyword:string) {
  

  interface  StateReducer {
    isRandom: boolean,
    isLoading: boolean,
    page: number
  }
  const INITIAL_VALUES: StateReducer = {
    isRandom: false,
    isLoading: false,
    page: 1
  }
  const ACTION_TYPES = {
     SET_IS_RANDOM: "setIsRandom",
     SET_IS_LOADING: "setIsLoading"
  }

  function reducer (currentState:StateReducer, action:any){
      switch (action.type) {
        case ACTION_TYPES.SET_IS_RANDOM:
          return {
            ...currentState,
            isRandom: action.payload.value
          }

        case ACTION_TYPES.SET_IS_LOADING:
          return {
            ...currentState,
            isLoading: action.payload.value
          }
      
      }
  }
  const { giffs, setGiffs } = useContext(GiffContext);
  const [page, setPage] = useState<number>(1)
  
  //useReducer
  const [state, dispatch] = useReducer<React.Reducer<any,any>>(reducer,INITIAL_VALUES)
  
  useEffect(() => {
    dispatch({type: ACTION_TYPES.SET_IS_LOADING, payload: {value:true}})
    GetGiffs({keyword, limit:10})
      .then(res => {
        setGiffs(res);
        dispatch({type: ACTION_TYPES.SET_IS_LOADING, payload: {value:false}})
        if (keyword === "random") dispatch({type:ACTION_TYPES.SET_IS_RANDOM,payload: {value: true}})
        localStorage.setItem("lastKeyword", keyword)
    });
  }, [ACTION_TYPES.SET_IS_LOADING, ACTION_TYPES.SET_IS_RANDOM, keyword, setGiffs]);

  useEffect(()=>{
   
    if (page === 1) return
    
    dispatch({type: ACTION_TYPES.SET_IS_LOADING, payload: {value:true}})
    GetGiffs({keyword, limit: 10, page}).then(res => {
      setGiffs(prevGiffs => prevGiffs.concat(res));
      dispatch({type: ACTION_TYPES.SET_IS_LOADING, payload: {value:false}})
      
    });
  }, [ACTION_TYPES.SET_IS_LOADING, keyword, page, setGiffs])
  
  const { isRandom, isLoading } = state;
  
  return { giffs, isLoading, isRandom, keyword, page, setPage };
}

export default useGiffs;
