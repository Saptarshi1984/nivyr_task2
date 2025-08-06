import React from 'react'

const GridVideo = ({src, text}) => {
  return (
    <div className='relative'>
        <video width="360px" height="307px" className="rounded-[16px]">
          <source src={src} type="video/mp4" />
        </video>
        <p className='absolute text-[#8273F8] z-1 left-[20px] bottom-[10px] font-semibold'>{text}</p>
    </div>
  )
}

export default GridVideo
