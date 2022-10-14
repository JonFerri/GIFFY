import React, { createContext, useState } from "react"
import { GiffType } from "Components/ListOfGiffs/ListOfGiffs"
import { useEffect } from "react"

type UserContextType = {
  userName: string | null
  setUserName: React.Dispatch<React.SetStateAction<string | null>>
  jwt: string | null
  setJwt: React.Dispatch<React.SetStateAction<string | null>>
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  favorites: Array<GiffType>
  updateFavorites: React.Dispatch<React.SetStateAction<Array<GiffType>>>
}

const UserContext = createContext<UserContextType>({} as UserContextType)

type UserContextProviderArgsTypes = {
  children: React.ReactNode
}

const session = JSON.parse(sessionStorage.getItem("infoToken") as string)

const sessionToken = session ? session.accesToken : null

export const UserContextProvider = ({
  children,
}: UserContextProviderArgsTypes) => {

    
  const [jwt, setJwt] = useState<string | null>(sessionToken)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [favorites, updateFavorites] = useState([] as GiffType[])
  const [userName, setUserName] = useState<string|null>(null)

  useEffect(()=> {

    const infoToken = JSON.parse((window.sessionStorage.getItem("infoToken") as string)) 
    if (Boolean(infoToken)) {
        setIsLoggedIn(true)
        const favs: GiffType[] = infoToken.favs as GiffType[]  
        updateFavorites(favs)
        setUserName(infoToken.userName)
        setJwt(infoToken.accesToken)
        console.log(infoToken)
    }
  }, [])  

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        jwt,
        setJwt,
        isLoggedIn,
        setIsLoggedIn,
        favorites,
        updateFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
