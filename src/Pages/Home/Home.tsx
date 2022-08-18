import "./Home.css"
import React from "react";
import ListOfGiffs from "Components/ListOfGiffs/ListOfGiffs";
import SearchBar from "Components/SearchBar/SearchBar";
import useGiffs from "Hooks/useGiffs";
import GetKeyword from "Services/GetKeyword";
import LazyTrending from "Components/TrendingSearches/LazyTrending";



const Home = () => {
    
    const { giffs, isRandom, keyword, setPage } = useGiffs(GetKeyword())
   
    return (
        <div className="home-page">
            <SearchBar />
            <h3>{isRandom ? "Random Giffs" : `Last search: "${ decodeURI(keyword) }"`}</h3>
            <ListOfGiffs giffs={giffs} /> 
            <button onClick={()=> setPage(prev => prev + 1)} >Next page</button>
            <LazyTrending />

        </div>

    )
}

export default Home;