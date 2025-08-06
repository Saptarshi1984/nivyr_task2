import React from 'react'
import MenuLink from './MenuLink'
import Image from 'next/image'
import logo from '/public/logo.png'
import ButtonOne from './ButtonOne'

const Navbar = () => {
  return (

    <header 
    className='w-[1215px] h-[49px] flex flex-row justify-evenly 
    items-center mx-auto mt-[36px] '>
      <Image
      width={120}
      height={49}
      src={logo}
      alt='logo'
       />
      <MenuLink />
      <div className='w-[164px] h-[39px] flex flex-row items-center justify-between'>
      <ButtonOne btnText={"Login"} color={'color-white'} bgColor={'bg-black'}/>
      <ButtonOne btnText={"Sign up"} color={'text-black'} bgColor={'bg-[#FFD300]'} />
      </div>
    </header>
  )
}

export default Navbar
