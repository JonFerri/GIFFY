import "./Giff.css";
import React from "react";
import { useLocation } from "wouter";

type GiffProps = {
  url: string;
  title: string;
  id: string;
};


const Giff = ({ url, title, id }: GiffProps) => {
  
  const [,pushLocation] = useLocation()

  const handleClick = (id: string)=> {
    pushLocation(`/giffs/singleGiff/${id}`)
  }

  return (
    <div className='single-giff-container'>
      <h4 style={{ color: "white" }}>{title}</h4>
      <img onClick={()=> handleClick(id)} alt='giff' src={url}></img>
    </div>
  );
};

export default Giff;
