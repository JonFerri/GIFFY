import "./ListOfGiffs.css"
import React from 'react'
import Giff from "../Giff/Giff";

export type GiffType = {
  url: string;
  id: string;
  title: string;
  height: number;
  width: number;
};

type ListOfGiffsProps = {
  giffs: Array<GiffType>;
};

const ListOfGiffs = ({ giffs }: ListOfGiffsProps) => {
  console.log({giffs})
  return (
    <>
      <div className='list-of-giffs'>
        {giffs?.map(giff => {
          return <Giff key={giff.id} {...giff} />;
        })}
      </div>
    </>
  );
};

export default ListOfGiffs;
