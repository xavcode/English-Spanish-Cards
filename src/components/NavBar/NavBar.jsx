import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 h-[9vh] bg-black w-full items-center flex flex-col  text-white'>
      <p className=' justify-center text-center items-center h-full text-5xl font-bold border-b-2'>
        English - Spanish - Cards
      </p>
      <p className='text-xl font-thin'>Click en una tarjeta para ver la respuesta correcta</p>
    </div>
  )
}
export default NavBar