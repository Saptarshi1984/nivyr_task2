import React from "react";
import Image from "next/image";
const CardSectionSix = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[604px] h-[486px] flex flex-col items-center justify-evenly">
        <p className="text-[24px]">
          Your phone is the ultimate video editor. Record, edit, and publish
          pro-level video with<span className="text-[#FFD300]"> EditAura</span> Captions App.
        </p>
        <div className="w-[602px] h-[213px] flex flex-row justify-evenly items-center bg-[#FFFFFF] rounded-[20px]">
            <div className="text-center">
                <h1 className="text-[60px] font-bold text-black">4.9/5</h1>
                <p className="text-black font-semibold">based on 6.7k reviews</p>
            </div>
            <div className="text-center">
                <h1 className="text-[60px] font-bold text-black">8M</h1>
                <p className="text-black font-semibold">User around the world</p>
            </div>
            <Image
            src={'/qr.png'}
            width={124}
            height={124}
            alt="qr" />
        </div>
        <button className="w-[281px] h-[60px] border-1 border-white rounded-[16px] text-[#FFD300]" type="button">DOWNLOAD THE APP</button>
      </div>
      <Image
      width={590}
      height={590}
      alt="img"
      src={'/img2.png'} />
    </div>
  );
};

export default CardSectionSix;
