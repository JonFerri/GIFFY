import { useState, useEffect, useContext } from "react";
import GetGiffs from "../Services/GetGiffs";
import { GiffContext } from "../Context/GiffContext";


function useGiffs(keyword:string) {
  


  const { giffs, setGiffs } = useContext(GiffContext);
  const [isRandom, setIsRandom ] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    console.log("First use Effect")
    setIsLoading(true);
    GetGiffs(keyword, 5).then(res => {
      setGiffs(res);
      setIsLoading(false);
      if (keyword === "random") setIsRandom(true)
      localStorage.setItem("lastKeyword", keyword)
    });
  }, [keyword, setGiffs]);

  useEffect(()=>{
   
    if (page === 1) return
    console.log("second use effect")
    setIsLoading(true);
    GetGiffs(keyword, 5, page).then(res => {
      setGiffs(prevGiffs => prevGiffs.concat(res));
      setIsLoading(false);
      
    });
  }, [keyword, page, setGiffs])

  return { giffs, isLoading, isRandom, keyword, page, setPage };
}

export default useGiffs;
