import "./Giff.css"
import React, { useContext } from "react"
import { useLocation } from "wouter"
import Fav from "Components/Fav/Fav"
import UserContext from "Context/UserContext"
import {GiffType} from "Components/ListOfGiffs/ListOfGiffs"


const Giff = ({ url, title, id, height, width }: GiffType) => {
  const [, pushLocation] = useLocation()
  const { isLoggedIn } = useContext(UserContext)

  const handleClick = (id: string) => {
    pushLocation(`/giffs/singleGiff/${id}`)
  }
  const classList = (height:number, width: number) => {
    const RATIO = 1.4
    const isTall = (height / width) > RATIO
    const isWide = (width / height) > RATIO
    return `single-giff-container ${isTall?"tall":""} ${isWide?"wide":""}`
  }
  return (
    <div className={classList(height,width)} id="container">
      <div className='img-container'>
        {
          isLoggedIn ? 
          <Fav giff={{ url, title, id, height, width }}/> :
          null
        }
        <img onClick={() => handleClick(id)} alt='giff' src={url} />
        <h4 style={{ color: "white" }}>{title}</h4>
      </div>
    </div>
  )
}

export default React.memo(Giff)
