import "./TrendingSearches.css";
import TrendingSearches from "./TrendingSearches";
import useLazy from "Hooks/useLazy";

const LazyTrending = () => {
  const { show, fromRef } = useLazy({});

  return (
   
    <div ref={fromRef}>
        {
            show ? <TrendingSearches /> : null
        }
    </div>
  ) 
};

export default LazyTrending;
