import {  useContext, useCallback, useState } from "react"
import getLoggedIn from "Services/GetLoggedIn"
import UserContext from "Context/UserContext"

type UseUserArgsType = {
    user: string
    password: string
}

const useUser = ({user, password }: UseUserArgsType) => {
    
    const [isError, setIsError] = useState(false)
        
    const { jwt,setJwt,setIsLoggedIn, isLoggedIn, setUserName } = useContext(UserContext)
    
    console.log({message: "useUser runs", user,password})
    
    const login = useCallback(({user,password}:UseUserArgsType)=> {
        getLoggedIn({user,password})
            .then(info => {
                if (info.accesToken) {
                    setIsLoggedIn(true)
                    setJwt(info.accesToken)
                    setUserName(info.userName)
                    
                    window.sessionStorage.setItem("infoToken", JSON.stringify(info))
                    
                } else {
                    setIsError(true)
                    console.log(info)
                }
            })
    },[setIsLoggedIn, setJwt, setUserName])

    return {user, jwt, login, isError, isLoggedIn}
}

export default useUser