import Loading from "Components/Loading/Loading";
import NavBar from "Components/NavBar/NavBar";
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
        <>
            <NavBar />
            <Giff title={giff.title} url={giff.url} id={giff.id} />
            
        </>
    )
}

export default SingleGiff;