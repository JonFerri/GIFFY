import "./ListOfGiffs.css"
import React from 'react'
import Giff from "../Giff/Giff";

type GiffType = {
  url: string;
  id: string;
  title: string;
};

type ListOfGiffsProps = {
  giffs: Array<GiffType>;
};

const ListOfGiffs = ({ giffs }: ListOfGiffsProps) => {
  
return (
    <>
      <div className='list-of-giffs'>
        {giffs.map(giff => {
          return <Giff key={giff.id} title={giff.title} url={giff.url} id={giff.id} />;
        })}
      </div>
    </>
  );
};

export default ListOfGiffs;
