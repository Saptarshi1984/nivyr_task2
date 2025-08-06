import ButtonTwo from "@/components/ButtonTwo";
import CardSectionOne from "@/components/CardSectionOne";
import Navbar from "@/components/Navbar";
import CardSectionTwo from "@/components/CardSectionTwo";
import Image from "next/image";
import CardSectionThree from "@/components/CardSectionThree";
import CardSectionFour from "@/components/CardSectionFour";



export default function Home() {
  return (
    <div>
   <Navbar />
   <main className="h-auto flex flex-col gap-10 items-center justify-evenly">
    <div className="flex flex-col justify-between items-center top-[141px] w-[844px] h-[192px] text-[48px] font-bold">
    <h1>CREATE  PRO LEVEL</h1>
    <h1>VIDEOS IN THE BLINK OF AI</h1> 
    </div>
    <div className="text-[20px]">
      <p>Bring AI-Powered efficiency and simplicity to your everyday editing</p>
    </div>
    <CardSectionOne />
    <ButtonTwo />
    <div className="w-[707px] h-[117px] flex flex-col items-center justify-between" >
      <h1 className="text-[48px] font-bold text-[#FFD300]">WHEN CREATIVITY POPS OUT</h1>
      <p className="text-[20px]">Various Styles, Countless Assets</p>
    </div>
    <CardSectionTwo  />
    <div className="w-[718px] h-[137px] flex flex-col items-center justify-between " >
      <h1 className="w-[716px] h-[69px] text-[40px] font-bold text-[#FFD300] text-center">CREATE CUSTOM AI - AVATARS</h1>
      <p className="w-[718] h-[44px] text-[18px] text-center">More content, less time. Create Talking Head videos in seconds with your own digital clone.</p>
    </div>
    <h1 className="text-[24px] text-[#FFD300] font-medium">Real Human</h1>
    <Image 
    width={849}
    height={556}
    alt="image1"
    src='/image.png'
    className="rounded-[16px]"
     />
    <h1 className="text-[24px] text-[#FFD300] font-medium">AI-Avatars</h1>
    <CardSectionThree />
    <CardSectionFour />
   </main>
   </div>   
  );
}
