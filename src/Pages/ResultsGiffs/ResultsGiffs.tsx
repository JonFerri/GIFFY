import "./ResultsGiffs.css"
import React, { useEffect }  from "react";
import useGiffs from "../../Hooks/useGiffs";
import ListOfGiffs from "../../Components/ListOfGiffs/ListOfGiffs";
import GetKeyword from "Services/GetKeyword";
import { Link } from "wouter";
import useNearScreen from "Hooks/useNearScreen";

const ResultsGiffs = ({ params }: any) => {

    const { keyword } = params
    
    const { giffs, setPage } = useGiffs(GetKeyword(keyword))
    const { fromRef, isNearScreen } = useNearScreen({once: false})
    
    useEffect(function() {
        if (isNearScreen) setPage(prev=> prev + 1)
    }, [setPage, isNearScreen])

    return (
        <div className="giffs-result-container">
            <Link className="link" to="/">Home</Link>
            <ListOfGiffs giffs={giffs} />
            <button onClick={()=> setPage(prev=> prev + 1)}>Next Page</button>
            <div ref={fromRef} className="infinity-scroll-bounder" ></div>
        </div>
        
    )
}


export default ResultsGiffs;