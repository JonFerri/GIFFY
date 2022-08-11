import React from "react";
import useGiffs from "../../Hooks/useGiffs";
import Loading from "../../Components/Loading/Loading";
import ListOfGiffs from "../../Components/ListOfGiffs/ListOfGiffs";
import { Link } from "wouter";

const ResultsGiffs = ({ params }: any) => {

    const { keyword } = params
    const { giffs, isLoading } = useGiffs(keyword)

    return (
        <>
            <Link style={{color:"white",fontSize: "40px"}} to="/">Home</Link>
            {
                isLoading ?
                <Loading /> :
                <ListOfGiffs giffs={giffs} />
             }
        </>
        
    )
}


export default ResultsGiffs;