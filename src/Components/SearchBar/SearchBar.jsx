import "./SearchBar.css";
import React, { useState } from "react";
import { useLocation } from "wouter";

const SearchBar = () => {
  
  const [textInput, changeTextInput] = useState("");
  const [, navigate] = useLocation();

  function clearInput() {
    changeTextInput("");
  }

  function showGiffs() {
    navigate( textInput === "" ? "/" : `/giffs/${textInput}` );
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
        />

        <button>Get Giffs</button>
      </form>
    </div>
  );
};

export default SearchBar;
