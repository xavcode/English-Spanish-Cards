import Card from '../Card/Card'
// import { useState } from 'react';
import { questions as questionsArr } from '../data/questions';
const CardContainer = () => {

  // const [isFlipped, setIsFlipped] = useState(true);

  const randomCompare = () => Math.random() - 0.5;
  questionsArr.sort(randomCompare)

  const questions = questionsArr.slice(0, 20)

  return (
    <div className='pt-4 h-full min-w-screen flex flex-wrap gap-5 px-2 justify-center'
    >
      {questions.map((word) => (
        <Card
          key={word.question}
          word={word}
        />
      ))
      }
    </div>
  )
}
export default CardContainer