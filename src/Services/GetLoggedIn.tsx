import { USER_API_URI } from "../Services/settings"
interface GetLoggedInArgsTypes {
    user: string
    password: string
}

const getLoggedIn = async ({user, password}:GetLoggedInArgsTypes)=> {
    
    try {
        const data = await fetch(`${USER_API_URI}/api/login/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickName:user,
                password
            })
        })
        const userInfo = await data.json()
        return userInfo    
    } catch (error) {
        console.log(error)
    }
    
}

export default getLoggedIn