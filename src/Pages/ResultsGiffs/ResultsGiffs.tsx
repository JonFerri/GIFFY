import "./ResultsGiffs.css"
import React, { useEffect }  from "react";
import useGiffs from "../../Hooks/useGiffs";
import ListOfGiffs from "../../Components/ListOfGiffs/ListOfGiffs";
import GetKeyword from "Services/GetKeyword";
import { Link } from "wouter";
import useLazy from "Hooks/useLazy";

const ResultsGiffs = ({ params }: any) => {

    const { keyword } = params
    
    const { giffs, setPage } = useGiffs(GetKeyword(keyword))
    const { fromRef, show } = useLazy({rootMargin:"300px", once: false})
    
    //const handleNextPage = ()=> console.log("next page")

    useEffect(function() {
        if (show) setPage(prev=> prev + 1)
        //if (show) handleNextPage()
    }, [setPage, show])

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