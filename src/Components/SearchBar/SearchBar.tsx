import "./SearchBar.css"
import React from "react"
import { useLocation } from "wouter"
import { FaSearch } from "react-icons/fa"
import useForm from "./hooks"
import { Langs } from "./reducerController"

export type SearchBarProps = {
  initialKeyword: string
  initialLimit: number
  initialLang: "es" | "en"
}

const SearchBar = ({
  initialKeyword,
  initialLimit,
  initialLang,
}: SearchBarProps) => {
  const [, navigate] = useLocation()
  const { limit, textInput, lang, updateLimit, updateLang, updateTextInput } =
    useForm({ initialKeyword, initialLang, initialLimit })

  function handleChangeLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const value: Langs = e.target.value as Langs
    //setLang(value)
    updateLang(value)
  }

  function showGiffs() {
    navigate(textInput === "" ? "/" : `/giffs/${textInput}/${limit}/${lang}`)
    // clearInput()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showGiffs()
  }

  return (
    <div className='search-bar'>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={textInput}
          onChange={e => {
            updateTextInput(e.target.value)
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
            updateLimit(parseInt(e.target.value))
          }}
          value={limit}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
        <select
          name='lang'
          id='lang'
          onChange={e => handleChangeLang(e)}
          value={lang}
        >
          <option value='es'>Spanish</option>
          <option value='en'>English</option>
        </select>
      </form>
    </div>
  )
}

export default React.memo(SearchBar)
