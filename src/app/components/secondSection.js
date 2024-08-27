import ArrowRight from '../assets/ArrowRight.png'
import Image from 'next/image';

export default function SecondSection() {
    return(

        <div className='flex h-[63px] w-[1300px] my-auto flex justify-between items-center'>



            <div className="w-[404px] h-[20px] mt-[194px] ml-[102px] gap-[20px] flex">
                <div className="w-[49px] h-[20px] text-[#62C3C6] font-[Sora] text-[16px] font-[400] leading-[20.16px] text-left">Home</div>
                <div className='w-[20px] h-[20px]'><Image src={ArrowRight}/></div>
                <div className="w-[99px] h-[20px] text-[#62C3C6] font-[Sora] text-[16px] font-[400] leading-[20.16px] text-left">Livebestand</div>
                <div className='w-[20px] h-[20px]'><Image src={ArrowRight}/></div>
                <div className="w-[136px] h-[20px] text-[#045A5C] font-[Sora] text-[16px] font-[700] leading-[20.16px] text-left">Cannabis Blüten</div>
            </div>



            <div className='flex flex-col justify-between mt-[194px] mr-[0px] w-[223px] h-[63px] gap-[12px]'>
                <div style={{fontSize:'14px', lineHeight:'17.64px', color: '#045A5C'}} className='w-[223px] h-[18px] font-[sora]'>GKV mit Kostenübernahme?</div>
                <button style={{fontSize:'14px', lineHeight:'17.64px', color: '#045A5C'}} className='w-[223px] h-[33px] rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none border-2 border-[#62C3C6] font-[sora]'>Preisoptionen</button>
            </div>

            

        </div>
    );
};