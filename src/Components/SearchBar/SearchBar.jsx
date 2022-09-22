import "./SearchBar.css";
import React, { useState } from "react";
import { useLocation } from "wouter";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  
  const [textInput, changeTextInput] = useState("");
  const [lang, setLang] = useState("en")
  const [limit, setLimit] = useState(10)
  const [, navigate] = useLocation();

  function clearInput() {
    changeTextInput("");
  }

  function showGiffs() {
    navigate( textInput === "" ? "/" : `/giffs/${textInput}/${limit}/${lang}` );
    clearInput();
  }

  function handleSubmit (e) {
    e.preventDefault();
    showGiffs();
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={textInput}
          onChange={e => {
            changeTextInput(e.target.value);            
          }}
          placeholder="Find giffs..."
        />
        <button><FaSearch /></button>
        <select 
          name="limit"
          id="limit"
          onChange={(e)=> setLimit(parseInt(e.target.value))}
          value={limit}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <select 
          name="lang"
          id="lang"
          onChange={(e)=> setLang(e.target.value)}
          value={lang}  
        >
          <option value="es">Spanish</option>
          <option value="en" >English</option>
        </select>

        
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
