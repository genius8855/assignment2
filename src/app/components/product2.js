import Image from "next/image";
import syrup from "../assets/syrup.png";
import Group from "../assets/Group.png"
import Line from "../assets/Line.png"

export default function Product2 () {
    return (
        <div style={{borderColor: '#28E3E9'}} className=" w-[310px] h-[554px] rounded-tl-[30px] rounded-tr-[0px] rounded-br-[30px] rounded-bl-[0px] border-2 gap-[20px] ">


            <div className="w-[310px] h-[41px] pt-[20px] pr-[20px] pb-[0px] pl-[20px] flex">
                    {/* Top Section */}
                <div style={{backgroundColor: '#0D70520D'}} className="w-[119px] h-[21px] rounded-[30px] flex ">
                    <div style={{backgroundColor:'#0D70520D',color: '#0D7052'}} className="w-[4px] h-[4px] rounded-[2px] my-auto ml-[10px] "></div>
                    <div style={{color: '#0D7052'}} className="w-[87px] h-[15px] font-[Sora] text-[12px] font-[300] leading-[15.12px] my-auto ml-[10px]">sofort lieferbar</div>
                </div>
                <div className="w-[50px] h-[21px] rounded-[30px]  "></div>
            </div>




            <div className="w-[310px] h-[150px] "><Image className="w-[50%] h-[100%] mx-auto" src={syrup}/></div>
            {/* Mid Section - Dawai ki bottle*/}






            {/* Bottom Section */}
            <div style={{borderColor: '#28E3E9', backgroundColor: '#62C3C64D'}} className="w-[310px] h-[339px] rounded-br-[30px] mt-[20px] gap-7.5  ">
                <div className="w-[262px] h-[214px] gap-6  " >



                    <div className="w-[262px] h-[142px] gap-5 pt-[1px]">
                        {/* Canify to Mango */}

                        <div className="w-[262px] h-[68px] gap-4 mt-[17px] ml-[17px] ">
                            <div style={{color: '#365758',backgroundColor:'#62C3C64D'}} className="w-[74px] h-[24px] font-[Sora] text-[16px] font-[600] font-bold leading-[20.16px] rounded-[4px] pl-[4px] pt-[1px] mb-[12px] cursor-pointer">Canify</div>
                            <div className="w-[262px] h-[28px] flex mt-[20px] ">
                                <div style={{color: '#116A6C',backgroundColor:'#FCFCFA'}} className="cursor-pointer pl-[20px] pt-[2px] rounded-[4px] w-[111px] h-[28px]">THC 18% </div>
                                <div style={{color: '#FCFCFA',backgroundColor:'#62C3C6'}} className="cursor-pointer pl-[20px] pt-[2px] rounded-[4px] ml-[7px] w-[111px] h-[28px]">CBD 1%</div>
                                <div className="w-[24px] h-[24px] ml-[7px] mt-[2px] cursor-pointer"><Image src={Group}/></div>
                            </div>
                        </div>

                        <div style={{color: '#116A6C'}} className="w-[262px] h-[54px] font-[Sora] text-[18px] font-[600] leading-[22.68px] mt-[25px] ml-[17px] ">Cannabis Flos 18/1 PT 
                        Mango
                        </div>
                    </div>




                    <div style={{color: '#365758'}} className="w-[262px] h-[48px] gap-2 ml-[17px] mt-[10px] ">
                        <div className="w-[262px] h-[20px] gap-2 flex">
                            <div className="w-[62px] h-[20px]">Kultivar</div>
                            <div><Image src={Line} className="mt-[20px]"/></div>
                            <div className="w-[62px] h-[20px]">Mango</div>
                        </div>
                        <div className="w-[262px] h-[20px] gap-2 flex">
                            <div className="w-[62px] h-[20px]">Genetik</div>
                            <div><Image className="mt-[20px]" src={Line}/></div>
                            <div className="w-[62px] h-[20px]">Hybrid</div>
                        </div>
                        <div className="w-[262px] h-[20px] gap-2 "></div>
                    </div>


                </div>


                <div className="w-[262px] h-[47px] flex ml-[17px] mt-[20px]" >
                    <div className="w-[91px] h-[47px] gap-0.5 ">
                        <div className="flex w-[91px] h-[30px] gap-1 ">
                            <div style={{color: '#62C3C6'}} className="w-[18px] h-[30px] font-[Sora] text-[24px] font-[800] leading-[30.24px]">€</div>
                            <div style={{color: '#116A6C'}} className="w-[62px] h-[30px] font-[Sora] text-[24px] font-[800] leading-[30.24px]">11,66</div>
                        </div>

                        <div style={{color: '#365758'}} className="w-[70px] h-[15px] font-[Sora] text-[12px] font-[300] leading-[15.12px]">pro Gramm</div>
                    </div>


                    <button style={{backgroundColor: '#ECFEAA', color: '#045A5C', fontSize:'14px'}} className="w-[164px] h-[33px] rounded-tl-[24px] rounded-br-[24px] rounded-bl-none rounded-tr-none gap-2.5 pt-[7px] pr-[18px] pb-[8px] pl-[18px] font-sora font-madium hover: bg-yellow-500">in den Warenkorb</button>
                </div>




            </div>




        </div>
    );
}