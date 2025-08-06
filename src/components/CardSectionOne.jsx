import React from 'react';

const CardSectionOne = () => {
  return (
    <div className="flex flex-row gap-4">
       
      <video  width="400px" height="328px" className='rounded-[40px]'>
        <source src="/video1.mp4" type="video/mp4" />
        
      </video>
      
      
      <video  width="400px" height="328px" className='rounded-[40px] bg-white'>
        <source src="/video2.mp4" type="video/mp4" />
        
      </video>
      
      <video  width="400px" height="328px" className='rounded-[40px]' >
        <source src="/video3.mp4" type="video/mp4" />
        
      </video>
    </div>
  );
};

export default CardSectionOne;
