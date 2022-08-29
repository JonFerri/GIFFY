import useSingleGiff from "Hooks/useSingleGiff";
import React from "react";
import Giff from "../../Components/Giff/Giff";


const SingleGiff = ({params}:any) => {
    
    const { id } = params;
    
    const { giff } = useSingleGiff(id)

    //the following line prevents the app from crashing, since it would try to render
    //before having the giff
    if(!giff) return <>{console.log("rendering")}</>
    
    return (
        <>
            {console.log("rendering")}
            <Giff title={giff.title} url={giff.url} id={giff.id} />
        </>
    )
}

export default SingleGiff;