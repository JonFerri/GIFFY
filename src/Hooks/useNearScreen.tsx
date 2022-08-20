import {useState, useEffect, useRef} from "react"

type optionsTypes = {
    root?: HTMLElement | null
    rootMargin?: string
    once?: boolean
}

const useNearScreen = ({root=null,rootMargin="0px 0px 200px 0px", once = true}:optionsTypes) => {

    const [isNearScreen, setIsNearScreen] = useState<boolean>(false)
    const fromRef = useRef<HTMLDivElement|null>(null)
    
    useEffect(()=> {

        const onScroll = (entries:IntersectionObserverEntry[]) => {
            
            const observedElement = entries[0];
            if (observedElement.isIntersecting) {
                console.log("is intersecting")
                if (!isNearScreen )setIsNearScreen(true)
                if (once) observer.disconnect()
            } else {
                console.log("not intersecting")
                if (isNearScreen) setIsNearScreen(false)
            }
        }


        const observer = new IntersectionObserver(onScroll,{root,rootMargin})
        
        observer.observe(fromRef.current as Element)
        
        return ()=> observer.disconnect() 
    })
    
    
    return {isNearScreen,fromRef}
}

export default useNearScreen;