import "@fontsource/poppins";
import { useScoreStore } from "../../store/store";


const Header = () => {
  const score = useScoreStore((store) => store.score)
  return (
    <div className='pt-7 pb-2 w-full flex flex-col text-white sticky top-0 z-30 bg-black shadow-md shadow-zinc-500'>
      <p className='text-4xl font-bold text-center'>Flipped-Cards</p>
      <p className='text-lg text-center'>Has click en una tarjeta para ver la respuesta correcta</p>
      <p className="mt-2 text-xl font-bold text-center text-green-400">Puntaje: <span className="underline underline-offset-4">{score}</span></p>
    </div>
  )
}
export default Header