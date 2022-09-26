//Imports
import { API_KEY } from "./settings";
interface GetGiffsArgs {
  keyword: string | null
  limit?: number
  page?: number
  lang?: "es" | "en"
}

function GetGiffs({keyword, limit = 10, page = 1,lang="en"}:GetGiffsArgs) {
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*(page-1)}&lang=${lang}`;

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
