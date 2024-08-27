import Image from "next/image";
import Search from '../assets/Search.png';
import Arrow_down from '../assets/Arrow_down.png';
import Ellipse from '../assets/Ellipse.png'
import sidebar from '../assets/sidebar.png'

export default function ThirdSection() {
    return(
        <div className="flex mt-[144px] ml-[102px] w-[1300px] h-[50px] justify-between ">

            <div className=" flex w-[160px] h-[50px] gap-[12px]">
                <div style={{backgroundColor: '#28E3E9'}} className="w-[20px] h-[26px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-none rounded-tr-none mt-[10px] "></div>

                <div style={{color:'#116A6C'}} className="w-[128px] h-[45px] font-[Sora] text-[36px] font-[600] leading-[45.36px]">Blüten</div>
            </div>


            <div className="w-[798px] h-[34px] gap-[20px] flex">
                {/* Right section */}
                <div style={{backgroundColor: '#EEF7F7', color: '#62C3C6'}} className="flex justify-between border-none focus:border-none outline-none placeholder-[#62C3C6] text-left my-auto text-left w-[340px] h-[34px] font-sora rounded-[30px] pt-[6px] pr-[16px] pb-[8px] pl-[16px]">
                    <input style={{backgroundColor: '#EEF7F7'}} className="h-[24px] w-[300px] border-none focus:border-none outline-none placeholder-[#62C3C6] pb-[3px] " placeholder='Suchen'/>
                    <div><Image className="cursor-pointer" src={Search}/></div>
                </div>


                <div style={{backgroundColor:'rgba(98, 195, 198, 0.3)'}} className="flex justify-between w-[173px] h-[34px] gap-[10px] rounded-[4px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] ">
                    {/* Drop down */}
                    <div style={{color: '#365758'}} className="w-[123px] h-[20px] font-[sora] font-solid pt-[] pr-[12px] pb-[2px] pl-[12px]font-sora font-bold text-[16px] leading-[20.16px] tracking-[0.01em] my-auto">Sortieren nach</div>
                    <div className="w-[16px] h-[16px] pt-[7px] cursor-pointer "><Image src={Arrow_down}/></div>
                </div>



                <div style={{backgroundColor:'rgba(98, 195, 198, 0.3)'}} className="flex justify-between w-[177px] h-[34px] gap-[10px] rounded-[4px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] ">
                    {/* switch */}
                    <div style={{color: '#365758'}} className="w-[116px] h-[20px] font-[sora] font-solid font-bold text-[16px] leading-[20.16px] tracking-[0.01em] my-auto">Verfügbarkeit</div>
                    <div className="w-[27px] h-[15px] flex my-auto mt-[10px]">
                        <div style={{backgroundColor:'#365758'}} className="w-[24px] h-[9px] rounded-[20px] "></div>
                        <div><Image className=" " src={Ellipse}/></div>
                    </div>
                </div>


                <div style={{backgroundColor:'rgba(98, 195, 198, 0.3)'}}  className="w-[48px] h-[34px] rounded-[4px] cursor-pointer">
                    <Image className="mx-auto mt-[6px] " src={sidebar}/>
                </div>
                

            </div>


        </div>
    );
}