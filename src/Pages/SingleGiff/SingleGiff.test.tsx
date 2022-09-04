import {render, screen } from '@testing-library/react'
import SingleGiff from './SingleGiff'
import GetGiffs from 'Services/GetGiffs'
import {GiffContext} from 'Context/GiffContext' 
import { GiffProps } from 'types'
import { useContext } from 'react'


test("SingleGiff renders", async ()=> {
    
    const giffs: GiffProps[] = await GetGiffs({keyword:"panda",limit:1})
    
    const {id} = giffs[0]
    type Args = {
        giffs: GiffProps[]
    }
    const SingleGiffWithProvider = ({giffs}:Args) => {
        
        const {setGiffs} = useContext(GiffContext)
        
        return <GiffContext.Provider value={{giffs:giffs, setGiffs}}>
            <SingleGiff params={{id:id}} />
        </GiffContext.Provider>
    }

    
    render(<SingleGiffWithProvider giffs={giffs} />)

    const image = await screen.findByAltText("giff")

    expect(image).toBeInTheDocument()
    
})



