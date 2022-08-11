
import { API_KEY } from "./settings";


function GetGiffs(keyword: string | null) {
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`;

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
