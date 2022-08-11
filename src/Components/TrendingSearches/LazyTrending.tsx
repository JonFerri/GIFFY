import "./TrendingSearches.css"

import React, {useRef, useEffect, useState} from "react";
import TrendingSearches from "./TrendingSearches";



const LazyTrending = () => {

    const lazyRef = useRef<HTMLDivElement>(null)
    
    const [show, setShow] = useState<boolean>(false)
    
    useEffect(()=> {
        const onScroll = (entries:IntersectionObserverEntry[]) => {
            const observedElement = entries[0];
            if (observedElement.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const element = lazyRef.current as Element 
        const observer = new IntersectionObserver(onScroll,{rootMargin: "100px"})
        observer.observe(element)
        
        return () => observer.disconnect()
    })

    return (
        <div ref={lazyRef}>
            {
                show ? <TrendingSearches /> : null
            }

        </div>
    )

}

export default LazyTrending