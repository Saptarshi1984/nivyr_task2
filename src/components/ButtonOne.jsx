import React from 'react'

const ButtonOne = ({btnText, color, bgColor}) => {
  return (
    <div 
    className={`${color} ${bgColor}   
    border-1 border-amber-100 w-[69px] h-[39px] 
    justify-center flex rounded-[8px]`} >
      <button type='button'>{btnText}</button>
    </div>
  )
}

export default ButtonOne
