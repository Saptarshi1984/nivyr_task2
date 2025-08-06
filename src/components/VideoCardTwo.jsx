import React from 'react'

const VideoCardTwo = ({src, w, h, text, span}) => {
  return (
    <div className='w-[396px] h-[490px] flex flex-col items-center justify-evenly rounded-[40px] bg-black'>
      <video  width="328px" height="252px" className='rounded-[40px]'>
        <source src={src} type="video/mp4" />        
      </video>
      <p className={`${w} ${h} text-center text-[16px]`}>{text}<span className='text-[#FFD300] font-semibold'>{span}</span></p>      
      <div className='w-[199px] h-[60px] flex flex-row items-center rounded-[16px] bg-[#FFD300]'>
      <button className='text-[#1E1E1E] flex m-auto text-center' type='button'>Explore More</button>      
      </div>
    </div>
  )
}

export default VideoCardTwo
