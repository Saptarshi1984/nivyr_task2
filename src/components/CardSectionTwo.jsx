import React from 'react'
import VideoCardTwo from './VideoCardTwo'

const CardSectionTwo = () => {
  return (
    <div>

    <div className="flex flex-row gap-4">

        <VideoCardTwo 
        src={'/03_AI Avatars.mp4'}
        w={'w-[274px]'}
        h={'h-[45px]'}
        text={'Make more Videos faster, with high-quality. '}
        span={'AI Avatars'}
         />
        <VideoCardTwo 
        src={'/03_Video Editing.mp4'}
        w={'w-[274px]'}
        h={'h-[45px]'}
        text={'Create pro - looking videos,effortlessly. '}
        span={'Video Editing'}
         />
        <VideoCardTwo 
        w={'w-[300px]'}
        h={'h-[45px]'}
        text={'Easily record yourself or your screen.Edit and share with anyone. '}
        span={'Recording'}
        src={'/03_Screen Recording.mp4'}  />       
     
    </div>
      
    </div>
  )
}

export default CardSectionTwo
