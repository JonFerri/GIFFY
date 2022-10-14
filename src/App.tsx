import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./Pages/Home/Home";
import ResultsGiffs from "./Pages/ResultsGiffs/ResultsGiffs";
import SingleGiff from "./Pages/SingleGiff/SingleGiff";
import Login from "Pages/Login/Login";
import {UserContextProvider} from "Context/UserContext"
import UserHome from "Pages/UserHome/UserHome";

function App() {
  return (
    <UserContextProvider>  
      <div className='App'>
        <Route path='/' component={Home} />
        <Route path='/giffs/:keyword/:limit/:lang' component={ResultsGiffs} />
        <Route path="/giffs/singleGiff/:id" component={SingleGiff} />
        <Route path="/login" component={Login}></Route>
        <Route path="/userhome" component={UserHome}></Route>
        <Route path="/404" component={()=> <h1>404</h1>} />
      </div>
    </UserContextProvider>
  );
} 

export default App;

