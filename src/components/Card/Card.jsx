import { useState } from 'react';
import CardFlip from 'react-card-flip';
import { startCase } from 'lodash';
const Card = ({ word }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='hover:scale-105 transition duration-100 hover:duration-200 cursor-pointer hover:brightness-125'>
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront='0.8' flipSpeedFrontToBack='0.8'
      >
        <div className='w-60 h-52 bg-neutral-800/90 flex items-center justify-center border border-solid border-neutral-950 rounded-2xl shadow-lg shadow-slate-400/40 '
          onClick={handleClick}
        >
          <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-center mb-2'>
              <p className=' border-b text-2xl text-white uppercase'>{startCase(word.question)}</p>
            </div>
            <ul className='flex flex-col text-center gap-1 w-36'>
              <div className='flex flex-col'>
                {
                  word.options.map(option => (
                    <li key={option} className='flex justify-between'>
                      <input type="checkbox" />
                      <span className="text-xl text-white font-bold">{startCase(option)}</span>

                    </li>
                  ))
                }
              </div>
            </ul>
          </div>
        </div>
        <div className=' w-60 h-52 bg-neutral-800/90 flex items-center justify-center border border-solid border-neutral-950 rounded-2xl shadow-lg shadow-slate-400/40'
          onClick={handleClick}
        >
          <p className="text-3xl text-lime-700 uppercase text-center font-bold">{word.response}</p>
        </div>
      </CardFlip>
    </div>
  );
};

export default Card;