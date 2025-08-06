import React from 'react'

const menuItem = ["Home", "AI Tools", "Testimonials", "Blogs", "Pricing"]

const MenuLink = () => {
  return (
    <nav className="w-[584px] h-[40px] flex flex-row justify-around items-center mt-[20px]">
        {menuItem.map((item, i) => (
   
         <a className='w-[70px] h-[40px]' key={i} href='#'>{item}</a>

        ))}
      
    </nav>
  )
}

export default MenuLink
