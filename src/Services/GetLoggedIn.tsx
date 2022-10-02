
interface GetLoggedInArgsTypes {
    user: string
    password: string
}

const getLoggedIn = async ({user, password}:GetLoggedInArgsTypes)=> {
    const data = await fetch("http://localhost:3030/api/login/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nickName:user,
            password
        })
    })
    const token = await data.json()
    return token
}

export default getLoggedIn