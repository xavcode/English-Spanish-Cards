import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import { startCase } from 'lodash';
const Card = ({ word }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const validations = () => {

  }

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <CardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront='0.75' flipSpeedFrontToBack='0.75' containerStyle={{ 
    cursor: 'pointer' }}>
      <div
        className="bg-sky-950/90 flex items-center justify-center border border-solid border-neutral-950 w-60 h-[130px] rounded-2xl shadow-inner shadow-zinc-600 "
        onClick={handleClick}
      >
        <div className='flex flex-col'>
          <div className='flex justify-center mb-2'>
            <p className=' border-b text-3xl text-white'>{startCase(word.question)}</p>
          </div>
          <ul className='grid grid-cols-2 gap-x-6 text-center'>
            {
              word.options.map(option => (
                <li key={option}>
                  <p className=" block text-2xl text-white ">{startCase(option)}</p>
                </li>
              )
              )
            }
          </ul>
        </div>
      </div>
      <div
        className="bg-sky-950/90 flex items-center justify-center border border-solid border-neutral-950 w-60 h-[130px] rounded-2xl"
        onClick={handleClick}
      >
        <p className="text-4xl text-lime-600 uppercase text-center font-bold">{word.response}</p>
      </div>
    </CardFlip>
  );
};

export default Card;