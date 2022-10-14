import "./ResultsGiffs.css"
import React, { useEffect }  from "react";
import useGiffs from "../../Hooks/useGiffs/useGiffs";
import ListOfGiffs from "../../Components/ListOfGiffs/ListOfGiffs";
import GetKeyword from "Services/GetKeyword";
import useNearScreen from "Hooks/useNearScreen";
import useTitle from "Hooks/useTitle/useTitle";
import SearchBar from "Components/SearchBar/SearchBar";
import Header from "Components/Header/Header";

const ResultsGiffs = ({ params }: any) => {

    const { keyword, limit, lang } = params
    
    const { giffs, setPage } = useGiffs({ keyword: GetKeyword(keyword), limit, lang })
    const { fromRef, isNearScreen } = useNearScreen({once: false, rootMargin:"500px"})
    const title = `${keyword} giffs`
    useTitle({title})
    useEffect(function() {
        
        if (isNearScreen) setPage()

    }, [setPage, isNearScreen])


    return (
        <div className="giffs-result-container">
            <Header />
            <SearchBar initialKeyword={keyword} initialLang={lang} initialLimit={limit}/>
            <ListOfGiffs giffs={giffs} />
            <div ref={fromRef} className="infinity-scroll-bounder" ></div>
        </div>
        
    )
}


export default ResultsGiffs;