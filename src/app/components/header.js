import Image from 'next/image';
import Search from '../assets/Search.png';
import Vector from '../assets/Vector.png';


export default function Header() {
    return (
      <>
        <div className="w-[1300px] h-[34px] flex gap-[30px] bg-black-500 mx-auto my-none mt-[70px] mb-[0px] ">


            <div style={{backgroundColor: '#EEF7F7', color: '#62C3C6'}} className="flex w-[366px] h-[34px] px-4 gap-0 rounded-tl-[30px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px] justify-between ">   
                <input style={{backgroundColor: '#EEF7F7', color: '#62C3C6'}} className="border-none focus:border-none outline-none placeholder-[#62C3C6] text-left my-auto w-[300px] h-[34px] font-sora" placeholder='Suchen'/>
                <div className='cursor-pointer text-right my-auto w-[20px] h-[20px]'><Image src={Search}/></div>
            </div>
            {/* Left section of Header */}


            <div className="w-[904px] h-[33px] flex gap-[50px]"> 
              {/* Right section of Header */}

              <div className="w-[692px] h-[20px] flex gap-[30px] my-auto">
                {/* Right-Left */}

                <div className="w-[146px] h-[20px] flex gap-[4px] cursor-pointer ">
                  {/* text-1 */}
                  <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                  <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#045A5C'}} className="font-sora font-bold hover:text-[1.05rem] transition-all duration-300 ease-in-out">Rezept einlösen</div>
                </div>

                
                <div className="w-[117px] h-[20px] flex gap-[4px] cursor-pointer ">
                  {/* text-2 */}
                  <div style={{backgroundColor: 'rgba(98, 195, 198, 0.3)'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                  <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#045A5C'}} className="font-sora font-medium">Live Bestand</div>
                </div>


                <div className="w-[174px] h-[20px] flex gap-[4px] cursor-pointer ">
                  {/* text-3 */}
                  <div style={{backgroundColor: 'rgba(98, 195, 198, 0.3)'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                  <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#045A5C'}} className="font-sora font-medium">Videosprechstunde</div>
                </div>


                <div className="w-[57px] h-[20px] flex gap-[4px] cursor-pointer ">
                  {/* text-4 */}
                  <div style={{backgroundColor: 'rgba(98, 195, 198, 0.3)'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                  <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#045A5C'}} className="font-sora font-medium">FAQs</div>
                </div>


                <div className="w-[78px] h-[20px] flex gap-[4px] cursor-pointer ">
                  {/* text-5 */}
                  <div style={{backgroundColor: 'rgba(98, 195, 198, 0.3)'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                  <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#045A5C'}} className="font-sora font-medium">Kontakt</div>
                </div>
              </div>


              <div className="w-[162px] h-[33px] flex gap-[16px]">
                {/* Right-right-button */}

                <div className="w-[36px] h-[30px] flex cursor-pointer">
                  <div className="w-[22.4px] h-[21px] mt-[8px] ml-[1.6px]"><Image src={Vector}/></div>
                  <div style={{backgroundColor: 'rgba(98, 195, 198, 0.3)', fontSize: '12px'}} className="w-[18px] h-[18px] rounded-[24px] my-auto mx-auto pl-[4px] " >2</div>
                </div>


                <button style={{backgroundColor: '#ECFEAA', color: '#045A5C', fontSize:'14px'}} className="w-[110px] h-[33px] rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none gap-[10px] pt-[7px] pr-[18px] pb-[8px] pl-[18px] font-sora font-madium hover: bg-yellow-500">Anmelden</button>
              </div>


            </div>

        </div>
      </>
    );
  }