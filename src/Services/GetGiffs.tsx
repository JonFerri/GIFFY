
import { API_KEY } from "./settings";


function GetGiffs(keyword: string | null, limit = 20, page = 1) {
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*(page-1)}&rating=g&lang=es`;

  return fetch(api_url)
    .then(response => response.json())
    .then(parsedResponse => {
      const { data } = parsedResponse;
      const giffInfo = data.map((giff: any) => {
        const { images, id, title } = giff;
        const { url } = images.downsized_medium;
        return { url, id, title };
      });

      return giffInfo;
    });
}

export default GetGiffs;
