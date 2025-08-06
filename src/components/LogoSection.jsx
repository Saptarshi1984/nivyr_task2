import React from 'react'
import Image from 'next/image'

const LogoSection = () => {
  return (
    <div className='flex flex-col items-center w-[1440px] h-[183px]'>
        <h1 className='text-[38px] text-[#FFD300] font-semibold'>Trusted By</h1>
        <div className='flex flex-row justify-between items-center'>
            <Image
            src={'/amazon.png'}
            alt=''
            width={280}
            height={112} />
            <Image
            src={'/merck.png'}
            alt=''
            width={280}
            height={112} />
            <Image 
            src={'/netflix.png'}
            alt=''
            width={280}
            height={112} />
            <Image 
            src={'/visa.png'}
            alt=''
            width={280}
            height={112} />
            <Image 
            src={'/ventura.png'}
            alt=''
            width={280}
            height={112} />
        </div>
      
    </div>
  )
}

export default LogoSection
