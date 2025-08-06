import React from 'react'

const ButtonTwo = () => {

  const btnStyle= "w-[272px] bg-[#FFD300] p-[20px] rounded-[16px] text-[24px]"
  return (

    <div className='w-[568px] h-[69px] flex flex-row justify-between items-center text-black '>
        <button className={btnStyle} type='button'>Try text to video</button>
        <button className={btnStyle} type='button'>Start free trail</button>       
    </div>

  )
}

export default ButtonTwo
