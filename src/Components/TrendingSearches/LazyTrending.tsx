import "./TrendingSearches.css"
import React from "react"
//import TrendingSearches from "./TrendingSearches"
import useLazy from "Hooks/useLazy"
//import Loading from "Components/Loading/Loading"
const TrendingSearches = React.lazy(()=> {
  return import('./TrendingSearches')
})

const LazyTrending = () => {
  const { show, fromRef } = useLazy({})

  return(
      
        <React.Suspense fallback={<div ref={fromRef}></div>}>
          <div ref={fromRef}>
            {show ? <TrendingSearches /> : null}
          </div>
        </React.Suspense>
      
    
  ) 
}

export default LazyTrending
