"use client"; 

import { useState, useEffect } from 'react';

export default function DoubleRangeSlider3() {
  const [sliderOneValue, setSliderOneValue] = useState(30);
  const [sliderTwoValue, setSliderTwoValue] = useState(70);
  const minGap = 0;
  const sliderMaxValue = 100;

  useEffect(() => {
    fillColor();
  }, [sliderOneValue, sliderTwoValue]);

  const slideOne = (e) => {
    const newValue = parseInt(e.target.value);
    if (sliderTwoValue - newValue <= minGap) {
      setSliderOneValue(sliderTwoValue - minGap);
    } else {
      setSliderOneValue(newValue);
    }
  };

  const slideTwo = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue - sliderOneValue <= minGap) {
      setSliderTwoValue(sliderOneValue + minGap);
    } else {
      setSliderTwoValue(newValue);
    }
  };

  const fillColor = () => {
    const percent1 = (sliderOneValue / sliderMaxValue) * 100;
    const percent2 = (sliderTwoValue / sliderMaxValue) * 100;
    document.querySelector('.slider3-track').style.background = `linear-gradient(to right, #CDE8E5 ${percent1}% , #41B3A2 ${percent1}% , #41B3A2 ${percent2}%, #CDE8E5 ${percent2}%)`;
  };

  return (
    <div className="w-[250px] h-[125px] gap-5 flex flex-col items-center">
      <div style={{ color: '#365758' }} className="text-center w-[250px] h-[23px] font-[Sora] text-[18px] font-[600] leading-[22.68px]">
        CBD Gehalt
      </div>

      <div className="relative w-[250px] h-[52px] flex flex-col items-center">
        <div style={{backgroundColor:'#62C3C6'}} className="relative w-full h-[5px]  rounded-md mt-2">
          <div className="slider3-track absolute w-full h-full rounded-md"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderOneValue}
            onChange={slideOne}
            className="absolute w-full h-[20px] bg-transparent appearance-none"
            style={{ zIndex: 1, position: 'absolute' }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderTwoValue}
            onChange={slideTwo}
            className="absolute w-full h-[20px] ml-[-0px] bg-transparent appearance-none"
            style={{ zIndex: 2, position: 'absolute' }}
          />
        </div>

        <div className="w-[250px] h-[24px] flex justify-between items-center  mt-4">
          <div style={{ backgroundColor: '#8191911A', color: '#365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] flex items-center justify-center">
            {sliderOneValue} %
          </div>
          <div className="w-[10px] h-[21px]">-</div>
          <div style={{ backgroundColor: '#8191911A', color: '#365758' }} className="w-[116px] h-[24px] rounded-[20px] pl-[10px] flex items-center justify-center">
            {sliderTwoValue} %
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider3-track {
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
