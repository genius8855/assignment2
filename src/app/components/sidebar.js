import Arrow_down from '../assets/Arrow_down.png'
import Image from 'next/image';
import Close from '../assets/Close.png'
import DoubleRangeSlider from './slider';
import DoubleRangeSlider2 from './slider2';
import DoubleRangeSlider3 from './slider3';

export default function Sidebar() {
    return (
        <div className="w-[250px] h-[1322px] gap-5 mt-[100px] ml-[102px] sticky-sidebar  ">


            <div style={{ backgroundColor: '#62C3C61A' }} className="w-[250px] h-[34px] rounded-[4px] py-auto px-auto ">
                <div style={{ color: '#045A5C' }} className="w-[65px] h-[30px] my-auto mx-auto  font-[Sora] text-[24px] font-[600] leading-[30.24px] ">filter</div>
            </div>
            {/* Top text */}





            <div className="w-[250px] h-[1268px] gap-10 pt-[24px] pb-[24px] ">



                {/* <div className="w-[250px] h-[125px] gap-5 ">
                    First
                    <div style={{ color: '#365758' }} className="items-center text-center justify-center w-[250px] h-[23px] font-[Sora] text-[18px] font-[600] leading-[22.68px]">Preis</div>

                    <div className="w-[250px] h-[52px] ">
                        <input type="range" className="w-[250px] h-[20px]" />

                        <div className="w-[250px] h-[24px] gap-1 flex">
                            <div style={{ backgroundColor: '#8191911A', color: ' #365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] ">5 €</div>
                            <div className="w-[10px] h-[21px]">-</div>
                            <div style={{ backgroundColor: '#8191911A', color: ' #365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] ">9 €</div>
                        </div>
                    </div>
                </div> */}

                <DoubleRangeSlider/>







                {/* Second */}
                <div className="w-[250px] h-[290px] gap-5 mt-[50px] ">

                    <div className="w-[250px] h-[207px] gap-5 ">
                        <div className="w-[250px] h-[23px] flex">
                            <div style={{ color: '#365758' }} className="pl-[84px] w-[234px] h-[23px]  font-[Sora] text-[18px] font-[600] leading-[22.68px]">Hersteller</div>
                            <Image style={{ color: '#365758' }} className='mr-[10px] w-[16px] h-[16px] cursor-pointer' src={Arrow_down} />
                        </div>
                        <div className="w-[250px] h-[164px] gap-4 mt-[20px] ">
                            <div className="w-[250px] h-[20px] gap-2.5 ">
                                <input style={{ borderBlockColor: '#62C3C6' }} className='my-auto w-[13px] h-[13px] rounded-[1px] border-1 ' type="checkbox" />
                                <label style={{ color: '#365758' }} className='my-auto font-[Sora] text-[16px] font-[400] leading-[22.16px] ml-2.5  '>ADREXpharma</label>
                            </div>

                            <div className="w-[250px] h-[20px] gap-2.5 ">
                                <input style={{ borderBlockColor: '#62C3C6' }} className='my-auto w-[13px] h-[13px] rounded-[1px] border-1 ' type="checkbox" />
                                <label style={{ color: '#365758' }} className='my-auto font-[Sora] text-[16px] font-[400] leading-[22.16px] ml-2.5  '>Aurora</label>
                            </div>

                            <div className="w-[250px] h-[20px] gap-2.5 ">
                                <input style={{ borderBlockColor: '#62C3C6' }} className='my-auto w-[13px] h-[13px] rounded-[1px] border-1 ' type="checkbox" />
                                <label style={{ color: '#365758' }} className='my-auto font-[Sora] text-[16px] font-[400] leading-[22.16px] ml-2.5  '>Avaay</label>
                            </div>

                            <div className="w-[250px] h-[20px] gap-2.5 ">
                                <input style={{ borderBlockColor: '#62C3C6' }} className='my-auto w-[13px] h-[13px] rounded-[1px] border-1 ' type="checkbox" />
                                <label style={{ color: '#365758' }} className='my-auto font-[Sora] text-[16px] font-[400] leading-[22.16px] ml-2.5  '>Bedrocan</label>
                            </div>

                            <div className="w-[250px] h-[20px] gap-2.5 ">
                                <input style={{ borderBlockColor: '#62C3C6' }} className='my-auto w-[13px] h-[13px] rounded-[1px] border-1 ' type="checkbox" />
                                <label style={{ color: '#365758' }} className='my-auto font-[Sora] text-[16px] font-[400] leading-[22.16px] ml-2.5  '>Cannamedical</label>
                            </div>

                        </div>
                        <div style={{ borderColor: '#ECFEAA' }} className='w-[240px] h-[33px] border-2 gap-2.5 rounded-tl-[24px] rounded-br-[24px] '>
                            <div style={{ color: '#045A5C' }} className='items-center text-center justify-center mt-[3px] font-[Sora] text-[14px] font-[400] leading-[17.64px] cursor-pointer'>mehr anzeigen</div>
                        </div>
                    </div>
                </div>




                {/* Third */}
                <DoubleRangeSlider2/>





                
                {/* Fourth */}
                <DoubleRangeSlider3/>








                {/* Fifth */}
                <div className='w-[250px] h-[101px] gap-5 mt-[50px] '>
                    <div style={{ color: '#365758' }} className='ml-[94px] mb-[20px] w-[250px] h-[23px] gap-5 font-[Sora] text-[18px] font-[600] leading-[22.68px]'>Genetik</div>
                    <div className='w-[250px] h-[28px] gap-1 flex'>
                        <div style={{backgroundColor:'#62C3C6',color:'white'}} className='w-[80.67px] h-[28px] gap-1 gap-2.5 rounded-[4px]  font-[Sora] text-[16px] font-[400] leading-[20.16px] flex items-center justify-center '>Indica</div>
                        <div style={{backgroundColor:'#62C3C64D',color:'#045A5C'}} className='w-[80.67px] h-[28px] gap-1 gap-2.5 rounded-[4px]  font-[Sora] text-[16px] font-[400] leading-[20.16px] flex items-center justify-center'>Sativa</div>
                        <div style={{backgroundColor:'#62C3C64D',color:'#045A5C'}} className='w-[80.67px] h-[28px] gap-1 gap-2.5 rounded-[4px]  font-[Sora] text-[16px] font-[400] leading-[20.16px] flex items-center justify-center'>Hybrid</div>
                    </div>
                </div>





                {/* Sixth */}
                <div className='w-[250px] h-[101px] gap-5 mt-[30px]'>
                    <div style={{ color: '#365758' }} className='ml-[67px] mb-[20px] w-[250px] h-[23px] gap-5 font-[Sora] text-[18px] font-[600] leading-[22.68px]'>Bestrahltung</div>
                    <div className='w-[250px] h-[28px] gap-1 flex'>
                        <div style={{backgroundColor:'#62C3C6',color:'white'}} className='w-[106px] h-[28px] gap-1 gap-2.5 rounded-[4px]  font-[Sora] text-[16px] font-[400] leading-[20.16px] flex items-center justify-center'>bestrahlt</div>
                        <div style={{backgroundColor:'#62C3C64D',color:'#045A5C'}} className='w-[140px] h-[28px] gap-1 gap-2.5 rounded-[4px]  font-[Sora] text-[16px] font-[400] leading-[20.16px] flex items-center justify-center'>Nicht bestrahlt</div>
                    </div>
                </div>





                {/* Seventh */}
                <div className='w-[250px] h-[53px] gap-5 flex mt-[20px] '>
                <div style={{ color: '#365758' }} className='ml-[94px] w-[250px] h-[23px] gap-5 font-[Sora] text-[18px] font-[600] leading-[22.68px]'>Terpene</div>
                <div className='cursor-pointer w-[40px] h-[40px] mt-[5px] '><Image src={Arrow_down}/></div>
                </div>





                {/* Eighth */}
                <div className='ml-[20px] w-250px h-[20px] gap-1 flex '>
                    <div className='mt-[6px] cursor-pointer'><Image src={Close}/></div>
                    <div>alle Filter zurücksetzen</div>
                </div>




            </div>




        </div>
    );
}