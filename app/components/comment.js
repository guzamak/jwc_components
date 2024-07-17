"use client";
import { useEffect, useRef, useState } from "react";
export default function Comment({ data, position, index ,prevPosition}) {
  const comment = useRef();
  const [isBlur, setIsBlur] = useState(false);
  const [haveChange, setHaveChange] = useState(false);

  useEffect(() => {
    const left = comment.current.getBoundingClientRect().left;
    const right = comment.current.getBoundingClientRect().right;
    if (left <= 0 || right >= window.screen.width - 36) {
      setIsBlur(true);
    } else {
      setIsBlur(false);
    }
    setHaveChange(true);
  },[comment.current]);
  
  useEffect(() => {
    const left = comment.current.getBoundingClientRect().left;
    const right = comment.current.getBoundingClientRect().right;
    if (position < prevPosition.current){
      console.log("1")
      if ((left <= 436 || right >= window.screen.width + 436 ) && haveChange) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    }else {
      if ((left <= -436 || right >= window.screen.width - 436 ) && haveChange) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    }
  }, [position]);

  return (
    <div
      className={`w-[400px] h-[260px] border-2 rounded-[20px] px-[25px] py-[32px] space-y-[15px] duration-200 ease-in-out
    ${isBlur && "blur-sm"}
    `}
      ref={comment}
    >
      <svg
        width="139"
        height="23"
        viewBox="0 0 139 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
          fill="#FFC633"
        />
        <path
          d="M40.3553 0L43.5537 6.8872L51.0922 7.80085L45.5305 12.971L46.9911 20.4229L40.3553 16.731L33.7195 20.4229L35.1801 12.971L29.6183 7.80085L37.1568 6.8872L40.3553 0Z"
          fill="#FFC633"
        />
        <path
          d="M69.421 0L72.6195 6.8872L80.158 7.80085L74.5962 12.971L76.0568 20.4229L69.421 16.731L62.7852 20.4229L64.2458 12.971L58.6841 7.80085L66.2226 6.8872L69.421 0Z"
          fill="#FFC633"
        />
        <path
          d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
          fill="#FFC633"
        />
        <path
          d="M127.553 0L130.751 6.8872L138.289 7.80085L132.728 12.971L134.188 20.4229L127.553 16.731L120.917 20.4229L122.377 12.971L116.816 7.80085L124.354 6.8872L127.553 0Z"
          fill="#FFC633"
        />
      </svg>
      <div className="flex space-x-[4px]">
        <p className="font-inter font-bold text-[20px]">{data.name}</p>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
            fill="#01AB31"
          />
        </svg>
      </div>
      <p className="font-inter text-[16px] opacity-60 ">{data.data}</p>
    </div>
  );
}
