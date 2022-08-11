import { useState, useEffect, useContext } from "react";
import GetGiffs from "../Services/GetGiffs";
import { GiffContext } from "../Context/GiffContext";


function useGiffs(keyword:string) {
  
  console.log("useGiffs acted");
  const { giffs, setGiffs } = useContext(GiffContext);
  const [isRandom, setIsRandom ] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setIsLoading(true);
    GetGiffs(keyword).then(res => {
      setGiffs(res);
      setIsLoading(false);
      if (keyword === "random") setIsRandom(true)
      localStorage.setItem("lastKeyword", keyword)
    });
  }, [keyword, setGiffs]);

  return { giffs, isLoading, isRandom, keyword };
}

export default useGiffs;
