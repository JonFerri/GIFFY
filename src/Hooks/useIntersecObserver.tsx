import {useState, useEffect} from "react"

type optionsTypes = {
    root?: HTMLElement | null
    rootMargin?: string
    element: HTMLDivElement | null
}

const useIntersecObserver = ({root=null,rootMargin="0px 0px 0px 0px", element}:optionsTypes) => {

    const [show, setShow] = useState<boolean>(false)

    useEffect(()=> {
        const onScroll = (entries:IntersectionObserverEntry[]) => {
            const observedElement = entries[0];
            if (observedElement.isIntersecting) {
                setShow(true)
            }
        }

        console.log({element})
        const trElement = element as Element 
        console.log({trElement})
        const observer = new IntersectionObserver(onScroll,{root,rootMargin})
        debugger
        observer.observe(trElement)
    
    })
    
    
    return show
}

export default useIntersecObserver;