

type ArgsGetUserFavsType = {
    jwt: string | null
}

const getUserFavs =  async ({ jwt }:ArgsGetUserFavsType) => {
    try {
        const apiData = await fetch(
            "http://localhost:3030/api/favs/getFavs",
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