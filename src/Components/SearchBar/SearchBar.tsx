import "./SearchBar.css"
import React, { useReducer } from "react"
import { useLocation } from "wouter"
import { FaSearch } from "react-icons/fa"
import reducer, {StateType, Langs, ActionType} from "./reducerController"

type SearchBarProps = {
  initialKeyword: string
  initialLimit: number
  initialLang: "es"|"en"
}

const SearchBar = ({initialKeyword, initialLimit, initialLang}: SearchBarProps) => {
  
  const [, navigate] = useLocation()
  
  const initialState = {
    textInput: initialKeyword,
    lang: initialLang,
    limit: initialLimit
  }
  const [state, dispatch] = useReducer<React.Reducer<StateType,ActionType>>(reducer,initialState)
  // function clearInput() {
  //   changeTextInput("")
  // }

  function handleChangeLang (e:React.ChangeEvent<HTMLSelectElement>){
    const value : Langs = e.target.value as Langs
    //setLang(value)
    dispatch({type:"setLang",payload:{lang:value}})
  }

  function showGiffs() {
    navigate(state.textInput === "" ? "/" : `/giffs/${state.textInput}/${state.limit}/${state.lang}`)
    // clearInput()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showGiffs()
  }

  return (
    <div className='search-bar'>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input
          type='text'
          value={state.textInput}
          onChange={e => {
            dispatch({type:"changeTextInput", payload:{textInput:e.target.value}})
          }}
          placeholder='Find giffs...'
        />
        <button>
          <FaSearch />
        </button>
        <select
          name='limit'
          id='limit'
          onChange={e => {
            dispatch({type:"setLimit",payload:{limit:parseInt(e.target.value)}})
          }}
          value={state.limit}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
        <select
          name='lang'
          id='lang'
          onChange={e => handleChangeLang(e)}
          value={state.lang}
        >
          <option value='es'>Spanish</option>
          <option value='en'>English</option>
        </select>
      </form>
    </div>
  )
}

export default React.memo(SearchBar)
