"use client";
import { useState } from "react";
import Image from "next/image";
export default function Nav() {
  const [isNav, setIsNav] = useState(false);
  return (
    <div className="w-screen flex flex-col justify-center items-center text-[16px] font-inter">
      <div className="w-[1239px] h-[105px] bg-white flex justify-between items-center overflow-hidden ">
        <h1 className="text-[32px] font-DM font-bold">JWC.CO</h1>
        <ul className="flex items-center w-[340px] gap-[24px]">
          <li
            className="inline-flex items-center gap-2"
            onMouseEnter={() => {
              setIsNav(true);
            }}
          >
            Shop
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isNav ? "rotate-180" : "rotate-0"} duration-200`}
            >
              <path
                d="M11.5306 1.53061L6.53063 6.53061C6.46095 6.60053 6.37816 6.65601 6.28699 6.69386C6.19583 6.73172 6.09809 6.7512 5.99938 6.7512C5.90067 6.7512 5.80293 6.73172 5.71176 6.69386C5.6206 6.65601 5.53781 6.60053 5.46813 6.53061L0.468128 1.53061C0.327232 1.38972 0.248077 1.19862 0.248077 0.999362C0.248077 0.800105 0.327232 0.609009 0.468128 0.468112C0.609025 0.327216 0.800121 0.248062 0.999378 0.248062C1.19864 0.248062 1.38973 0.327216 1.53063 0.468112L6 4.93749L10.4694 0.467488C10.6103 0.326592 10.8014 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5319 0.467488C11.6728 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6728 1.38909 11.5319 1.52999L11.5306 1.53061Z"
                fill="black"
              />
            </svg>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="w-[590px] h-[48px] bg-[#F0F0F0] rounded-[62px] inline-flex items-center p-4 gap-[12px]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7959 19.2041L16.3437 14.75C17.6787 13.0104 18.3019 10.8282 18.087 8.64606C17.8722 6.46389 16.8353 4.44515 15.1867 2.99936C13.5382 1.55356 11.4014 0.78898 9.20984 0.860705C7.01829 0.932429 4.93607 1.83509 3.38558 3.38558C1.83509 4.93607 0.932429 7.01829 0.860705 9.20984C0.78898 11.4014 1.55356 13.5382 2.99936 15.1867C4.44515 16.8353 6.46389 17.8722 8.64606 18.087C10.8282 18.3019 13.0104 17.6787 14.75 16.3437L19.2059 20.8006C19.3106 20.9053 19.4348 20.9883 19.5715 21.0449C19.7083 21.1015 19.8548 21.1307 20.0028 21.1307C20.1508 21.1307 20.2973 21.1015 20.4341 21.0449C20.5708 20.9883 20.695 20.9053 20.7997 20.8006C20.9043 20.696 20.9873 20.5717 21.044 20.435C21.1006 20.2983 21.1298 20.1517 21.1298 20.0037C21.1298 19.8557 21.1006 19.7092 21.044 19.5725C20.9873 19.4357 20.9043 19.3115 20.7997 19.2069L20.7959 19.2041ZM3.12499 9.49999C3.12499 8.23914 3.49888 7.0066 4.19938 5.95823C4.89987 4.90987 5.89551 4.09277 7.06039 3.61026C8.22527 3.12775 9.50707 3.00151 10.7437 3.24749C11.9803 3.49347 13.1162 4.10063 14.0078 4.99219C14.8994 5.88375 15.5065 7.01966 15.7525 8.25629C15.9985 9.49292 15.8722 10.7747 15.3897 11.9396C14.9072 13.1045 14.0901 14.1001 13.0418 14.8006C11.9934 15.5011 10.7608 15.875 9.49999 15.875C7.80977 15.8733 6.18927 15.201 4.99411 14.0059C3.79894 12.8107 3.12673 11.1902 3.12499 9.49999Z"
              fill="black"
              fill-opacity="0.4"
            />
          </svg>
          <input placeholder="Search for products..." className="bg-[#F0F0F0] outline-none"></input>
        </div>
        <div className="inline-flex items-center gap-4">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.375 19.25C9.375 19.6208 9.26503 19.9834 9.059 20.2917C8.85298 20.6 8.56014 20.8404 8.21753 20.9823C7.87492 21.1242 7.49792 21.1613 7.1342 21.089C6.77049 21.0166 6.4364 20.838 6.17417 20.5758C5.91195 20.3136 5.73337 19.9795 5.66103 19.6158C5.58868 19.2521 5.62581 18.8751 5.76773 18.5325C5.90964 18.1899 6.14996 17.897 6.45831 17.691C6.76665 17.485 7.12916 17.375 7.5 17.375C7.99728 17.375 8.47419 17.5725 8.82582 17.9242C9.17745 18.2758 9.375 18.7527 9.375 19.25ZM17.25 17.375C16.8792 17.375 16.5166 17.485 16.2083 17.691C15.9 17.897 15.6596 18.1899 15.5177 18.5325C15.3758 18.8751 15.3387 19.2521 15.411 19.6158C15.4834 19.9795 15.662 20.3136 15.9242 20.5758C16.1864 20.838 16.5205 21.0166 16.8842 21.089C17.2479 21.1613 17.6249 21.1242 17.9675 20.9823C18.3101 20.8404 18.603 20.6 18.809 20.2917C19.015 19.9834 19.125 19.6208 19.125 19.25C19.125 18.7527 18.9275 18.2758 18.5758 17.9242C18.2242 17.5725 17.7473 17.375 17.25 17.375ZM22.0753 6.08094L19.5169 14.3966C19.3535 14.9343 19.0211 15.4051 18.569 15.739C18.1169 16.0729 17.5692 16.2521 17.0072 16.25H7.77469C7.2046 16.2482 6.65046 16.0616 6.1953 15.7183C5.74015 15.3751 5.40848 14.8936 5.25 14.3459L2.04469 3.125H1.125C0.826631 3.125 0.540483 3.00647 0.329505 2.7955C0.118526 2.58452 0 2.29837 0 2C0 1.70163 0.118526 1.41548 0.329505 1.2045C0.540483 0.993526 0.826631 0.875 1.125 0.875H2.32687C2.73407 0.876258 3.12988 1.00951 3.45493 1.25478C3.77998 1.50004 4.01674 1.84409 4.12969 2.23531L4.81312 4.625H21C21.1761 4.62499 21.3497 4.6663 21.5069 4.74561C21.664 4.82492 21.8004 4.94001 21.905 5.08164C22.0096 5.22326 22.0795 5.38746 22.1091 5.56102C22.1387 5.73458 22.1271 5.91266 22.0753 6.08094ZM19.4766 6.875H5.45531L7.41375 13.7281C7.43617 13.8065 7.48354 13.8755 7.54867 13.9245C7.6138 13.9736 7.69315 14.0001 7.77469 14H17.0072C17.0875 14.0002 17.1656 13.9746 17.2303 13.927C17.2949 13.8794 17.3426 13.8123 17.3662 13.7356L19.4766 6.875Z"
              fill="black"
            />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.875C8.99747 0.875 7.0399 1.46882 5.37486 2.58137C3.70981 3.69392 2.41206 5.27523 1.64572 7.12533C0.879387 8.97543 0.678878 11.0112 1.06955 12.9753C1.46023 14.9393 2.42454 16.7435 3.84055 18.1595C5.25656 19.5755 7.06066 20.5398 9.02471 20.9305C10.9888 21.3211 13.0246 21.1206 14.8747 20.3543C16.7248 19.5879 18.3061 18.2902 19.4186 16.6251C20.5312 14.9601 21.125 13.0025 21.125 11C21.122 8.3156 20.0543 5.74199 18.1562 3.84383C16.258 1.94567 13.6844 0.877978 11 0.875ZM6.45969 17.4284C6.98195 16.7143 7.66528 16.1335 8.45418 15.7331C9.24308 15.3327 10.1153 15.124 11 15.124C11.8847 15.124 12.7569 15.3327 13.5458 15.7331C14.3347 16.1335 15.0181 16.7143 15.5403 17.4284C14.2134 18.3695 12.6268 18.875 11 18.875C9.37323 18.875 7.78665 18.3695 6.45969 17.4284ZM8.375 10.25C8.375 9.73082 8.52896 9.22331 8.8174 8.79163C9.10583 8.35995 9.5158 8.0235 9.99546 7.82482C10.4751 7.62614 11.0029 7.57415 11.5121 7.67544C12.0213 7.77672 12.489 8.02673 12.8562 8.39384C13.2233 8.76096 13.4733 9.22869 13.5746 9.73789C13.6759 10.2471 13.6239 10.7749 13.4252 11.2545C13.2265 11.7342 12.8901 12.1442 12.4584 12.4326C12.0267 12.721 11.5192 12.875 11 12.875C10.3038 12.875 9.63613 12.5984 9.14385 12.1062C8.65157 11.6139 8.375 10.9462 8.375 10.25ZM17.1875 15.8694C16.4583 14.9419 15.5289 14.1914 14.4688 13.6737C15.1444 12.9896 15.6026 12.1208 15.7858 11.1769C15.9689 10.2329 15.8688 9.25583 15.498 8.36861C15.1273 7.4814 14.5024 6.72364 13.702 6.19068C12.9017 5.65771 11.9616 5.37334 11 5.37334C10.0384 5.37334 9.09833 5.65771 8.29797 6.19068C7.49762 6.72364 6.87275 7.4814 6.50198 8.36861C6.13121 9.25583 6.0311 10.2329 6.21424 11.1769C6.39739 12.1208 6.85561 12.9896 7.53125 13.6737C6.4711 14.1914 5.54168 14.9419 4.8125 15.8694C3.89661 14.7083 3.32614 13.3129 3.1664 11.8427C3.00665 10.3725 3.2641 8.88711 3.90925 7.55644C4.55441 6.22578 5.5612 5.10366 6.81439 4.31855C8.06757 3.53343 9.5165 3.11703 10.9953 3.11703C12.4741 3.11703 13.9231 3.53343 15.1762 4.31855C16.4294 5.10366 17.4362 6.22578 18.0814 7.55644C18.7265 8.88711 18.984 10.3725 18.8242 11.8427C18.6645 13.3129 18.094 14.7083 17.1781 15.8694H17.1875Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {/* isNav */}
      <div
        className={`w-screen ${
          isNav ? "h-[250px]" : "h-[0px]"
        } bg-white flex justify-center items-center overflow-hidden duration-200 ease-in-out`}
        onMouseLeave={() => {
          setIsNav(false);
        }}
      >
        <div className="flex flex-col justify-start items-start font-inter gap-[24px] w-[495.6px] pr-32">
          <h1 className="font-bold">Shop Branch</h1>
          <div className="flex justify-between w-full ">
            <ul className="space-y-[19px] opacity-60 text-[16px]">
              <li>Bangkok</li>
              <li>Tokyo</li>
              <li>New York</li>
              <li>London</li>
            </ul>
            <ul className="space-y-[19px] opacity-60 text-[16px]">
              <li>Bangkok</li>
              <li>Tokyo</li>
              <li>New York</li>
              <li>London</li>
            </ul>
            <ul className="space-y-[19px] opacity-60 text-[16px]">
              <li>Bangkok</li>
              <li>Tokyo</li>
              <li>New York</li>
              <li>London</li>
            </ul>
          </div>
        </div>
        {/* img */}
        <div className=" w-[743.4px] inline-flex gap-12">
          <div className="w-[295px] h-[191px] relative rounded-[20px] overflow-hidden z-0 ">
            <h1 className="z-20 text-white absolute bottom-4 left-4 font-DM font-bold" >Bangkok</h1>
            <Image
              src="/ad34d7476ab6e10819a53d24dedc0a1a.jpg"
              fill
              className=" object-cover z-[-10]"
            />
          </div>
          <div className="w-[295px] h-[191px] relative rounded-[20px] overflow-hidden z-0">
            <h1 className="z-20 text-white absolute bottom-4 left-4 font-DM font-bold" >Tokyo</h1>
            <Image
              src="/250726b3cf7ef8f8a8e2b1caf05c3c25.jpg"
              fill
              className=" object-cover z-[-10]"
            />
          </div>
          <div className="w-[295px] h-[191px] relative rounded-[20px] overflow-hidden z-0">
            <h1 className="z-20 text-white absolute bottom-4 left-4 font-DM font-bold">New York</h1>
            <Image
              src="/62fb9aabc0cdb8b53f77e0db86288d63.jpg"
              fill
              className=" object-cover z-[-10]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
