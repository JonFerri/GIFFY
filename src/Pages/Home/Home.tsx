import "./Home.css"
import React, {useContext} from "react";
import ListOfGiffs from "Components/ListOfGiffs/ListOfGiffs";
import SearchBar from "Components/SearchBar/SearchBar";
import useGiffs from "Hooks/useGiffs/useGiffs";
import GetKeyword from "Services/GetKeyword";
import LazyTrending from "Components/TrendingSearches/LazyTrending";
import useTitle from "Hooks/useTitle/useTitle";
import Header from "Components/Header/Header";
import { useLocation } from "wouter";
import UserContext from "Context/UserContext";
import { useEffect } from "react";


const Home = () => {
    
    const { isLoggedIn } = useContext(UserContext) 
    const [,navigate] = useLocation()
    const { giffs, isRandom, keyword, setPage } = useGiffs({ keyword: GetKeyword() })
    
    const title = isRandom ? "Random Giffs" : `"${ decodeURI(keyword) }" giffs` 
    useTitle({title})
    
    useEffect(()=> {
        console.log({isLoggedIn,from: "useEffect"})
        if (isLoggedIn) {
            navigate("/userhome")
        }
    },[isLoggedIn, navigate])
    return (
        <div className="home-page">
            <Header />
            <SearchBar initialKeyword={keyword} initialLimit={giffs.length !== 0 ? giffs.length : 5} initialLang="en"/>
            <h3>{isRandom ? "Random Giffs" : `Last search: "${ decodeURI(keyword) }"`}</h3>
            <ListOfGiffs giffs={giffs} /> 
            <button onClick={()=> setPage()} >Next page</button>
            <LazyTrending />

        </div>

    )
}

export default Home;