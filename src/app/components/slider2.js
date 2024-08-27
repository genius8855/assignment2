"use client"; 

import { useState, useEffect } from 'react';

export default function DoubleRangeSlider2() {
  const [slider2OneValue, setslider2OneValue] = useState(41);
  const [slider2TwoValue, setslider2TwoValue] = useState(88);
  const minGap = 0;
  const sliderMaxValue = 100;

  useEffect(() => {
    fillColor();
  }, [slider2OneValue, slider2TwoValue]);

  const slide2One = (e) => {
    const newValue = parseInt(e.target.value);
    if (slider2TwoValue - newValue <= minGap) {
      setslider2OneValue(slider2TwoValue - minGap);
    } else {
      setslider2OneValue(newValue);
    }
  };

  const slide2Two = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue - slider2OneValue <= minGap) {
      setslider2TwoValue(slider2OneValue + minGap);
    } else {
      setslider2TwoValue(newValue);
    }
  };

  const fillColor = () => {
    const percent1 = (slider2OneValue / sliderMaxValue) * 100;
    const percent2 = (slider2TwoValue / sliderMaxValue) * 100;
    document.querySelector('.slider2-track').style.background = `linear-gradient(to right, #CDE8E5 ${percent1}% , #41B3A2 ${percent1}% , #41B3A2 ${percent2}%, #CDE8E5 ${percent2}%)`;
  };

  return (
    <div className="w-[250px] h-[125px] gap-5 flex flex-col items-center">
      <div style={{ color: '#365758' }} className="text-center w-[250px] h-[23px] font-[Sora] text-[18px] font-[600] leading-[22.68px]">
        THC Gehalt
      </div>

      <div className="relative w-[250px] h-[52px] flex flex-col items-center">
        <div style={{backgroundColor:'#62C3C6'}} className="relative w-full h-[5px]  rounded-md mt-2">
          <div className="slider2-track absolute w-full h-full rounded-md"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={slider2OneValue}
            onChange={slide2One}
            className="absolute w-full h-[20px] bg-transparent appearance-none"
            style={{ zIndex: 1, position: 'absolute' }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={slider2TwoValue}
            onChange={slide2Two}
            className="absolute w-full h-[20px] ml-[-0px] bg-transparent appearance-none"
            style={{ zIndex: 2, position: 'absolute' }}
          />
        </div>

        <div className="w-[250px] h-[24px] flex justify-between items-center  mt-4">
          <div style={{ backgroundColor: '#8191911A', color: '#365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] flex items-center justify-center">
            {slider2OneValue} %
          </div>
          <div className="w-[10px] h-[21px]">-</div>
          <div style={{ backgroundColor: '#8191911A', color: '#365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] flex items-center justify-center">
            {slider2TwoValue} %
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider2-track {
          background: linear-gradient(to right, #62C3C61A 0%, #6A9C89 0%, #6A9C89 100%, #8191911A 100%);
        }

        input[type="range"]::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          background: #62C3C6;
          cursor: pointer;
          -webkit-appearance: none;
        //   border-radius: 50%;
          border-radius: 20px 0 20px 0;
          position: relative;
          z-index: 3;
          margin-top: -7px; /* Adjust based on thumb height */
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #62C3C6;
          cursor: pointer;
          border-radius: 50%;
          position: ;
          z-index: 3;
        }

        input[type="range"]::-ms-thumb {
          width: 20px;
          height: 20px;
          background: #62C3C6;
          cursor: pointer;
          border-radius: 50%;
          position:;
          z-index: 3;
        }
        
      `}</style>
    </div>
  );
}
