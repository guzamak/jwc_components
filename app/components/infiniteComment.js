"use client";
import { useEffect, useRef, useState,useCallback } from "react";
import Comment from "./comment";
export default function InfiniteComments() {
  const [position, setPosition] = useState(-2);
  const [ChangePosition,setChangePosition] = useState(true);
  const prevPosition = useRef(0);
  const plusPosition = () => {
    if (ChangePosition ){
      setPosition(position + 1);
      prevPosition.current = position;
      setChangePosition(false);
    }
  };
  const minusPosition = () => {
    if (ChangePosition ){
      setPosition(position - 1);
      prevPosition.current = position;
      setChangePosition(false);
    }
  };
  const [cusData, setCusData] = useState([
    {
      name: "Alex K.",
      data: "Finding clothes that align with my personal style used to be a challenge until I discovered JWC.CO. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      data: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon JWC.CO. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "Mooen",
      data: "I'm blown away by the quality and style of the clothes I received from JWC.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sarah M.",
      data: "I'm blown away by the quality and style of the clothes I received from JWC.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
  ]);
  const com1 = useRef();
  const com2 = useRef();
  const com3 = useRef();

  const positionChange = () => {
    const com1Left = com1.current.getBoundingClientRect().left;
    const com2Left = com2.current.getBoundingClientRect().left;
    const com3Left = com3.current.getBoundingClientRect().left;
    const com1Right = com1.current.getBoundingClientRect().right;
    const com2Right = com2.current.getBoundingClientRect().right;
    const com3Right = com3.current.getBoundingClientRect().right;
    const comLeft = [com1Left, com2Left, com3Left];
    const comRight = [com1Right, com2Right, com3Right];

    // Sort the arrays by position
    comLeft.sort((a, b) => a - b);
    comRight.sort((a, b) => a - b);

    if (position < prevPosition.current) {
      if (com1Right <= com2Left && com1Right <= 0) {
        const currentTranslateX = parseFloat(com1.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com1.current.style.transform = `translateX(${currentTranslateX + comRight[2] + Math.abs(com1Left) +36}px)`;
      } else if (com2Right <= com3Left && com2Right <= 0) {
        const currentTranslateX = parseFloat(com2.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com2.current.style.transform = `translateX(${currentTranslateX + comRight[2] + Math.abs(com2Left) +36}px)`;
      } else if (com3Right <= com1Left && com3Right <= 0) {
        const currentTranslateX = parseFloat(com3.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com3.current.style.transform = `translateX(${currentTranslateX + comRight[2] + Math.abs(com3Left) + 36}px)`;
      }
    } else {        
      if (com1Left >= com2Right && com1Left >= window.screen.width) {
        const currentTranslateX = parseFloat(com1.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com1.current.style.transform = `translateX(${ currentTranslateX + comLeft[0] - Math.abs(com1Right) - 36}px)`;
      } else if (com2Left >= com3Right  && com2Left >= window.screen.width) {
        const currentTranslateX = parseFloat(com1.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com2.current.style.transform = `translateX(${ currentTranslateX + comLeft[0] - Math.abs(com2Right)  - 36}px)`;
      } else if (com3Left >= com1Right && com3Left >= window.screen.width) {
        const currentTranslateX = parseFloat(com1.current.style.transform.match(/translateX\(([-\d.]+)px\)/)[1]);
        com3.current.style.transform = `translateX(${ currentTranslateX + comLeft[0] - Math.abs(com3Right) -36 }px)`;
      }
    }
    setTimeout(() => {
      setChangePosition(true);
    },1000)
  }


  return (
    <div className=" space-y-14 overflow-hidden flex flex-col items-center">
      <div className=" flex justify-between items-center pt-20 pb-12 w-[1239px]">
        <h1 className=" font-DM font-bold text-[48px] ">OUR HAPPY CUSTOMERS</h1>
        <span className="w-1/12 inline-flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={plusPosition}
          >
            <path
              d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z"
              fill="black"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={minusPosition}
          >
            <path
              d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
              fill="black"
            />
          </svg>
        </span>
      </div>

      <span
        className="inline-flex  duration-500 gap-x-[36px] "
        style={{transform: `translateX(${436 * position}px)`}}
        onTransitionEnd={positionChange}>
        <span className="gap-x-[36px] inline-flex" ref={com1}
        style={{transform: `translateX(${0}px)`}}>
        {cusData.map((cus, index) => (
          <Comment data={cus} position={position} index={index}  key={index} prevPosition={prevPosition} />
        ))}
        </span>
        <span className="gap-x-[36px] inline-flex" ref={com2}
        style={{transform: `translateX(${0}px)`}}>
        {cusData.map((cus, index) => (
          <Comment data={cus} position={position} index={index}  key={index}  prevPosition={prevPosition}  />
        ))}
        </span>
        <span className="gap-x-[36px] inline-flex bg-blue-600-" ref={com3}
        style={{transform: `translateX(${0}px)`}}>
        {cusData.map((cus, index) => (
          <Comment data={cus} position={position} index={index} key={index}  prevPosition={prevPosition} />
        ))}
        </span>
      </span>
      
    </div>
  );
}
