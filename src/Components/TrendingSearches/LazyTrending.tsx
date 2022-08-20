import "./TrendingSearches.css"
import React from "react"
import useLazy from "Hooks/useNearScreen"
const TrendingSearches = React.lazy(()=> {
  return import('./TrendingSearches')
})

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useLazy({})

  return(
      
        <React.Suspense fallback={<div ref={fromRef}></div>}>
          <div ref={fromRef}>
            {isNearScreen ? <TrendingSearches /> : null}
          </div>
        </React.Suspense>
      
    
  ) 
}

export default LazyTrending
