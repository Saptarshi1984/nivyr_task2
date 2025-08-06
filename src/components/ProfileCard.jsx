import React from 'react'
import Image from 'next/image'

const ProfileCard = ({comment, src1, src2, details}) => {
  return (
    <div className='w-[396px] h-[296px] bg-[#FFD300] rounded-[20px]'>
        <div className='w-[396px] h-[296px] bg-white flex flex-col justify-between rounded-[20px] '>
            <p className='text-black p-2 w-[302px] h-[78px] flex m-auto'>{comment}</p>
            <div className='flex flex-row items-center justify-evenly gap-6 '>
                <Image
                src={src1}
                width={120}
                height={140}
                alt='profile'                                
                 />
                <div className='w-[176px] h-[105px]'>
                    <p className='text-black text-[14px]'>{details}</p>
                    <Image
                    src={src2}
                    width={85}
                    height={40}
                    alt='logo'
                     />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProfileCard
