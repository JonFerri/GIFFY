import React, {useContext} from "react";
import Giff from "../../Components/Giff/Giff";
import { GiffContext } from "../../Context/GiffContext";


const SingleGiff = ({params}:any) => {
    
    const { id } = params;
    const { giffs } = useContext(GiffContext);
    const giff  = giffs.find(giff=> giff.id === id)! 
    
    return (
        <>
            <Giff title={giff.title} url={giff.url} id={giff.id} />
        </>
    )
}

export default SingleGiff;