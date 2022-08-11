const GetKeyword = (keyword: string | null = null) => {
    
    const keywordToUse  = keyword || localStorage.getItem("lastKeyword") || "random" 
    
    return keywordToUse
      
}

export default GetKeyword