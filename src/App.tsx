import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./Pages/Home/Home";
import ResultsGiffs from "./Pages/ResultsGiffs/ResultsGiffs";
import SingleGiff from "./Pages/SingleGiff/SingleGiff";

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} />
      <Route path='/giffs/:keyword/:limit/:lang' component={ResultsGiffs} />
      <Route path="/giffs/singleGiff/:id" component={SingleGiff} />
      <Route path="/404" component={()=> <h1>404</h1>} />
    </div>
  );
}

export default App;

