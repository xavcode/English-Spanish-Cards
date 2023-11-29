import { useState } from 'react';
import CardFlip from 'react-card-flip';
import { startCase } from 'lodash';
import { useScoreStore } from '../../store/store';
import Swal from 'sweetalert2'

const Card = ({ word }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)

  const incrementScore = useScoreStore((store) => store.incrementScore)


  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {

    if (selectedOption === null) {
      Swal.fire({
        // title: 
        text: 'Selecciona una opcion',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        animation: 'true',
        toast: 'true',
        // timer: '2500',
        width: '20em',
        confirmButtonColor: '#4ADE80'
      })
    }
    else if (selectedOption !== null) {
      selectedOption === word.response
        ? (
          setIsCorrect(true)
          , incrementScore()
        )
        : setIsCorrect(false)
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div className=' transition duration-100 hover:duration-200  hover:brightness-125'>
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront='0.8' flipSpeedFrontToBack='0.8'>
        <div className='w-60 h-52 bg-neutral-800/90 flex items-center justify-center border border-solid border-neutral-950 rounded-2xl shadow-lg shadow-slate-400/40'>
          <div className='pt-1 flex flex-col items-center justify-center'>
            <div className='flex justify-center mb-2'>
              <p className=' border-b text-2xl text-white uppercase'>{startCase(word.question)}</p>
            </div>
            <ul className='flex flex-col text-center w-40 '>
              <div className='flex flex-col'>
                {
                  word.options.map(option => (
                    <li
                      key={option} className='flex relative justify-between'>
                      <input type="radio" name={option} checked={selectedOption === option} onChange={() => handleCheckboxChange(option)} />
                      <span className="text-xl w-3/4 text-white text-left ">{startCase(option)}</span>
                    </li>
                  ))
                }
                <div>
                  <button
                    onClick={handleCheckAnswer}
                    // onChange={handleChangeSelectOption}
                    className={`text-white my-2 p-1 cursor-pointer hover:scale-105 rounded-md bg-green-400`} >Revisar</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className='cursor-pointer w-60 h-52 bg-neutral-800/90 flex items-center justify-center border border-solid border-neutral-950 rounded-2xl shadow-lg shadow-slate-400/40'
        >
          <div>
            <p className="text-3xl text-green-400 uppercase text-center font-bold">{word.response}</p>
            {!isCorrect
              ? <p className={`mt-3 text-center text-xl font-bold ${isCorrect ? 'text-green-500/80' : 'text-red-700'}`}>{startCase(selectedOption)}❌</p>
              : <p className={`mt-3 text-center text-xl ${isCorrect ? 'text-green-500/80' : 'text-red-700'}`}> <span className='text-3xl'>✔</span></p>
            }
          </div>
        </div>
      </CardFlip>
    </div>
  );
};

export default Card;