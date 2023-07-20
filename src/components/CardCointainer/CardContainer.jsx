import Card from '../Card/Card'
import React, { useState } from 'react';
import { questions } from '../data/questions';
const CardContainer = () => {

  const [isFlipped, setIsFlipped] = useState(true);
  
  const randomCompare = () => Math.random() - 0.5;
  questions.sort(randomCompare)

  const questions2 = questions.slice(0,20)

  return (
    <div className='flex items-center justify-center min-h-full w-screen overflow-hidden mt-[10vh] mb-[10vh]'>
      <div className='grid xm:sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-2 h-[80vh] mt-4'>
        {questions2.map((word) => (
          <Card
            key={word.question}
            word={word}          
          />
        ))
        }
      </div>
    </div>
  )
}
export default CardContainer