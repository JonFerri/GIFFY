import { API_KEY } from "./settings";

const getSingleGiff = (giffId:string) => {

    return fetch(`http://api.giphy.com/v1/gifs/${giffId}?api_key=${API_KEY}`)
        .then(response=> response.json())
        .then(giffData=> {
            console.log({giffData})
            const { images, id, title } = giffData.data;
            const { url } = images.downsized_medium;
            
            return {url,title,id}
        })
}

export default getSingleGiff