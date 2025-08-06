import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[656px] bg-black flex flex-col items-center justify-around m-auto rounded-tl-[100px] rounded-tr-[100px]">
      <div className="flex flex-row items-center m-auto gap-4 w-[1003px] h-[300px]">
        <div className="  flex flex-col gap-4">
            <h1 className="text-[20px]">Follow Us</h1>
            <div className="flex flex-row gap-8">
            <Image src={'/logo.png'} width={10} height={20} alt="logo" />
            <Image src={'/logo.png'} width={24} height={24} alt="logo" />
            <Image src={'/logo.png'} width={24} height={24} alt="logo" />
            <Image src={'/logo.png'} width={24} height={24} alt="logo" />
            </div>
            
            <a href="#" className="w-[167px] h-[19px] text-[16px]">Terms and conditions</a>
            <a href="#" className="w-[167px] h-[19px] text-[16px]">Privacy</a>
            <a href="#" className="w-[167px] h-[19px] text-[16px]">Cookies </a>
            <a href="#" className="w-[167px] h-[19px] text-[16px]">Licenes Agreement</a>            
            <p>COPYRIGHT @ 2025 EDITAURA</p>
        </div>
        <div className="h-[300px] w-[1px] bg-white"></div>
        <div className="w-[100%] flex flex-row items-center justify-center">
            <div className="w-[33%] flex flex-col gap-4 text-[16px]">
                <h1 className="text-[20px]">AI Tools</h1>                
                <a href="">Video Editing</a>
                <a href="">Recordings</a>
                <a href="">Background Remove</a>
                <a href="">Text Adding</a>
               
            </div>
            <div className="w-[33%] flex flex-col gap-4 text-[16px]">
                <h1 className="text-[20px]">Resources</h1>                
                <a href="">About Us</a>
                <a href="">Blogs</a>
                <a href="">Careers</a>
                <a href="">Newsroom</a>
                
            </div>
            <div className=" w-[33%] flex flex-col gap-4 text-[16px]">
                <h1 className="text-[20px]">Help center</h1>
                
                <a href="">Support center</a>
                <a href="">Contact Us</a>
                <a href="">Refund</a>
                <a href="">Cancel Subscription</a>
                
            </div>
        </div>
      </div>
      <Image
      src={'/logo.png'}
      width={310}
      height={127}
      alt="logo" />
    </div>
  );
};

export default Footer;
