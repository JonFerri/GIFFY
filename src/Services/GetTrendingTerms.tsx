import { API_KEY } from "./settings";

function GetTrendingTerms() {
  const api_url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}&limit=30&offset=0&rating=g`;
  

  return fetch(api_url)
    .then(response => response.json())
    .then(parsedResponse => {
      const { data } = parsedResponse;
      
      return data
      
    });
}

export default GetTrendingTerms;
