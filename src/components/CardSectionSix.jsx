import React from "react";
import Image from "next/image";
const CardSectionSix = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[604px] h-[486px] flex flex-col items-center justify-evenly">
        <p className="text-[24px]">
          Your phone is the ultimate video editor. Record, edit, and publish
          pro-level video with
          <span className="text-[#FFD300]">EditAura</span> Captions App.
        </p>
        <div className="w-[602px] h-[213px] bg-[#FFD300] rounded-[20px]"></div>
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
