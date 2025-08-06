import React from "react";

const CardSectionThree = () => {
  return (
    <div>
     <div className="w-[1220px] h-[343px] flex flex-row justify-between">
      <video width="393px" height="258px" >
        <source src="/05_Add Subtitles_1.mp4" type="video/mp4" />
      </video>

      <video width="393px" height="258px" >
        <source src="/05_Change  Background_1.mp4" type="video/mp4" />
      </video>

      <video width="393px" height="258px" >
        <source src="/05_Add Music_1.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="flex flex-row gap-[10px] justify-around">
        <button className="w-[202px] h-[60px] border-1 border-white rounded-[16px] text-[#FFD300] text-[20px]" type="button">Add Subtitles</button>
        <button className="w-[202px] h-[60px] border-1 border-white rounded-[16px] text-[#FFD300] text-[20px]" type="button">Change Background</button>
        <button className="w-[202px] h-[60px] border-1 border-white rounded-[16px] text-[#FFD300] text-[20px]" type="button">Add Musics</button>
      </div>
    </div>
  );
};

export default CardSectionThree;
