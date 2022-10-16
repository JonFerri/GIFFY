import { USER_API_URI } from "../Services/settings"

type ArgsGetUserFavsType = {
    jwt: string | null
}

const getUserFavs =  async ({ jwt }:ArgsGetUserFavsType) => {
    try {
        const apiData = await fetch(
            `${USER_API_URI}/api/favs/getFavs`,
            {
                method: "GET",
                headers: {
                    "Authorization":`Bearer ${jwt}`
                }
            }
        )
        const { info, error } = await apiData.json()
                
        return {
            favs: info ? info : null,
            error: error ? error : null 
        }

    } catch (error) {
        return {trackedError: error}
    }
}

export default getUserFavs