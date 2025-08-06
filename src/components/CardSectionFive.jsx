

import React from "react";
import ProfileCard from "./ProfileCard";



const CardSectionFive = () => {
  return (
     
    <div className="w-[1216px] h-[522px] flex flex-col gap-8 items-center justify-around">
      <div className="w-[742px] h-[138px] flex fex-col gap-4 text-[48px] text-center">
        <p>LOVED BY CREATORS.<br />LOVED BY THE FORTUNE <span className="text-[#FFD300] font-bold">500</span></p>         
      </div>

      <div className="flex flex-row justify-between gap-4 items-center">
        <ProfileCard
          comment={"EditAura is my one-stop video editing shop! It's cut my editing time by around 60%, freeing me to focus on my online career coaching business." }
          src1={"/profile1.png"}
          src2={"/logo1.png"}
          details={"Nadeem L Entrepreneur and Owner, TheCareerCEO.com"}
        />
        <ProfileCard
          comment={
            "I love using EditAura. The subtitles are the most accurate I've seen on the market. It's helped take my content to the next level."
          }
          src1={"/profile2.png"}
          src2={"/logo2.png"}
          details={"Laura Haleydt Brand Marketing Manager, Carlsberg Importers"}
        />
        <ProfileCard
          comment={
            "EditAura has been game-changing. It's allowed us to create gorgeous content for social promotion and ad units with ease."
          }
          src1={"/profile3.png"}
          src2={"/logo3.png"}
          details="Max Alter Director of Audience Development, NBCUniversal"
        />
      </div>
      <button type="button" className="w-[175px] h-[60px] text-[20px] rounded-[16px] border-1 border-white text-[#FFD300] p-4">View More</button>
      </div>
  );
};

export default CardSectionFive
