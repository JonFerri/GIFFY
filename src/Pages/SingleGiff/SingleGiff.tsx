import "./SingleGiff.css"
import Header from "Components/Header/Header";
import Loading from "Components/Loading/Loading";
import useSingleGiff from "Hooks/useSingleGiff/useSingleGiff";
import useTitle from "Hooks/useTitle/useTitle";
import React from "react";
import { Redirect } from "wouter";
import Giff from "../../Components/Giff/Giff";


const SingleGiff = ({params}:any) => {
    
    const { id } = params;
    
    const { giff, isLoading, isError } = useSingleGiff(id)

    const title: string = giff ? giff.title : ""  
    useTitle({title})
    
    
    if(isLoading) return <Loading />
    if (isError) return (<Redirect to="/404"/>)

    //the following line prevents the app from crashing, since it would try to render
    //before having the giff
    if(!giff) return <>{console.log("rendering")}</>
    
    
    return (
        <section className="giff-container">
            <Header />
            <div className="giff-wrap">
                <Giff {...giff} />
            </div>
            
            
        </section>
    )
}

export default SingleGiff;