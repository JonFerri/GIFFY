import {useContext, useEffect, useState } from 'react'
import getSingleGiff from 'Services/GetSingleGiff'
import {GiffContext} from 'Context/GiffContext'

type GiffProps = {
    url: string
    title: string
    id: string
}


export default function useSingleGiff (id:string) {
    console.log("useSingleGiff")
    const {giffs} = useContext(GiffContext)
    
    //Checks if there are giffs in the context and brings the matching giff
    const inheritGiff:GiffProps = giffs.find(giff=> giff.id === id)!

    const [giff,setGiff] = useState(inheritGiff)
    console.log(giff)
    
    useEffect(()=>{
        console.log("effect")
        if(!giff){
            console.log("inside the if")
            getSingleGiff(id).then(fetchedGiff=>{
                setGiff(fetchedGiff)
            })
        }
        
    })

    return {giff}

}