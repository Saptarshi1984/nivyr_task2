import React from "react";
import GridVideo from "./GridVideo";

const CardSectionFour = () => {
  return (
    <div className="w-[806px] h-[857px] flex flex-col items-center justify-between gap-8">
      <h1 className="text-[48px] font-bold">
        SCALE <span className="text-[#FFD300]">VIDEOS</span> ACROSS <span className="text-[#FFD300]">TEAMS</span>
      </h1>
      <p className="text-[18px] text-center">
        Empower your team to easily create on-brand content with Custom
        Templates and Brand Kit. Ensure quality through simple feedback and
        review flows.
      </p>
      <div className="grid grid-cols-2 gap-8">
        <GridVideo src={'/08_Brand Kit.mp4'} text={"Brand Kit"} />
        <GridVideo src={'/08_Review Mode.mp4'} text={"Review Mode"} />
        <GridVideo src={'/08_Collaboration.mp4'} text={"Collaboration"} />
        <GridVideo src={'/08_Assets Sharing.mp4'} text={"Assets Sharing"} />       
      </div>
    </div>
  );
};

export default CardSectionFour;
