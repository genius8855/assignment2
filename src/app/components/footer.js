export default function Footer() {
    return(
        <div style={{backgroundColor:'#1A8D91'}} className="w-[1470px] h-[201px] mt-[180px] flex">
            
            {/* First */}
            <div style={{color:'#FFFFFF80'}} className="w-[78px] h-[69px] gap-3 ml-[100px] mt-[100px] ">
                <div className="  font-[Sora] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">AGB</div>
                <div className="  font-[Sora] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Impressum</div>
                <div className="  font-[Sora] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Datenschutz</div>
            </div>




            {/* Second Link */}
            <div className=" ml-[100px] mt-[50px]">

                <div className="w-[290px] h-[20px] flex">
                    <div className="w-[146px] h-[20px] flex gap-[4px] cursor-pointer ">
                    <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                    <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#FFFFFF'}} className=" font-[Sora] text-[16px] font-[400] leading-[20.16px]">Rezept einlösen</div>
                    </div>
                
                    <div className="w-[117px] h-[20px] flex gap-[4px] cursor-pointer ">
                        <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                        <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#FFFFFF'}} className=" font-[Sora] text-[16px] font-[400] leading-[20.16px]">Live Bestand</div>
                    </div>
                </div>



                <div className="w-[369px] h-[20px] flex mt-[15px] ">

                    <div className="w-[174px] h-[20px] flex gap-[4px] cursor-pointer ">
                    <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                    <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#FFFFFF'}} className=" font-[Sora] text-[16px] font-[400] leading-[20.16px]">Videosprechstunde</div>
                    </div>


                    <div className="w-[57px] h-[20px] flex gap-[4px] cursor-pointer ">
                    <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                    <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#FFFFFF'}} className=" font-[Sora] text-[16px] font-[400] leading-[20.16px]">FAQs</div>
                    </div>


                    <div className="w-[78px] h-[20px] flex gap-[4px] cursor-pointer ml-[15px] ">
                    <div style={{backgroundColor: '#28E3E9'}} className="w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] rounded-bl-none rounded-tr-none"></div>
                    <div style={{fontSize:'16px', lineHeight:'20.16px', color:'#FFFFFF'}} className=" font-[Sora] text-[16px] font-[400] leading-[20.16px]">Kontakt</div>

                    </div>
                
                </div>



            </div>





            {/* Third Address */}
            <div className="ml-[80px] mt-[30px] ">
                <div style={{color:'#FFFFFF80'}}  className="font-[Manrope] text-[12px] font-[300] leading-[15.12px] mb-[10px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Standort</div>
                <div style={{color:' #FFFFFF'}}  className="hover:text-[1.05rem] transition-all duration-300 ease-in-out  w-[162px] h-[66px]  font-[Sora] text-[16px] font-[800] leading-[21.86px]">Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)</div>
            </div>




            {/* Fourth */}
            <div className="w-[114px] h-[49px] ml-[80px] mt-[30px] ">
                <div style={{color:'#FFFFFF80'}}  className="font-[Manrope] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Telefon</div>
                <div style={{color:' #FFFFFF'}}  className="  w-[162px] h-[66px]  font-[Sora] text-[16px] font-[800] leading-[21.86px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">0223 545 5250</div>
            </div>




            {/* Fifth timing */}
            <div className="ml-[80px] mt-[30px] ">
                <div style={{color:'#FFFFFF80'}}  className="font-[Manrope] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Öffnungszeiten</div>
                <div style={{color:'#FFFFFF80'}}  className="font-[Manrope] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Mo-Fr</div>
                <div style={{color:' #FFFFFF'}}  className="hover:text-[1.05rem] transition-all duration-300 ease-in-out  w-[162px] h-[px]  font-[Sora] text-[16px] font-[800] leading-[21.86px]">09:00 – 18:00 Uhr</div>
                <div style={{color:'#FFFFFF80'}}  className="font-[Manrope] text-[12px] font-[300] leading-[15.12px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">Sa</div>
                <div style={{color:' #FFFFFF'}}  className="  w-[162px] h-[px]  font-[Sora] text-[16px] font-[800] leading-[21.86px] hover:text-[1.05rem] transition-all duration-300 ease-in-out">09:00 – 18:00 Uhr</div>
            </div>




        </div>
    );
}