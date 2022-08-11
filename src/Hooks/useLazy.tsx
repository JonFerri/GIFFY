import {useState, useEffect, useRef} from "react"

type optionsTypes = {
    root?: HTMLElement | null
    rootMargin?: string
}

const useLazy = ({root=null,rootMargin="0px 0px 200px 0px"}:optionsTypes) => {

    const [show, setShow] = useState<boolean>(false)
    const fromRef = useRef<HTMLDivElement|null>(null)
    
    useEffect(()=> {

        const onScroll = (entries:IntersectionObserverEntry[]) => {
            console.log("intersector working")
            const observedElement = entries[0];
            if (observedElement.isIntersecting) {
                console.log("is intersecting")
                setShow(true)
                observer.disconnect()
            }
        }


        const observer = new IntersectionObserver(onScroll,{root,rootMargin})
        
        observer.observe(fromRef.current as Element)
        
        return ()=> observer.disconnect() 
    })
    
    
    return {show,fromRef}
}

export default useLazy;