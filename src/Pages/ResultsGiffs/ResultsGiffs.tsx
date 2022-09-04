import "./ResultsGiffs.css"
import React, { useEffect }  from "react";
import useGiffs from "../../Hooks/useGiffs/useGiffs";
import ListOfGiffs from "../../Components/ListOfGiffs/ListOfGiffs";
import GetKeyword from "Services/GetKeyword";
import { Link } from "wouter";
import useNearScreen from "Hooks/useNearScreen";

const ResultsGiffs = ({ params }: any) => {

    const { keyword } = params
    
    const { giffs, setPage } = useGiffs({ keyword: GetKeyword(keyword) })
    const { fromRef, isNearScreen } = useNearScreen({once: false, rootMargin:"500px"})
    
    useEffect(function() {
        
        if (isNearScreen) setPage()

    }, [setPage, isNearScreen])

    return (
        <div className="giffs-result-container">
            <Link className="link" to="/">Home</Link>
            <ListOfGiffs giffs={giffs} />
            <div ref={fromRef} className="infinity-scroll-bounder" ></div>
        </div>
        
    )
}


export default ResultsGiffs;