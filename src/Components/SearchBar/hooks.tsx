import { useReducer } from "react";
import reducer, {StateType, Langs, ActionType} from "./reducerController"
import { SearchBarProps } from "./SearchBar";

export default function useForm ({initialKeyword,initialLang,initialLimit}:SearchBarProps){

    const initialState = {
        textInput: initialKeyword,
        lang: initialLang,
        limit: initialLimit
      }
    const [state, dispatch] = useReducer<React.Reducer<StateType,ActionType>>(reducer,initialState)
    
    const {limit,lang,textInput} = state
    
    return {
        limit,
        lang,
        textInput,
        updateLimit: (limit:number) => dispatch({type:"setLimit", payload:{limit}}),
        updateLang: (lang:Langs) => dispatch({type:"setLang", payload:{lang}}),
        updateTextInput: (textInput:string) => dispatch({type:"changeTextInput", payload:{textInput}}),
        
    }
    
}

