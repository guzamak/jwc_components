import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[797px] w-screen bg-[#F2F0F1] flex -z-20 overflow-hidden justify-center">
      <div className="w-[619.5] h-full  mr-0 space-y-7 relative flex flex-col justify-center ">
        <h1 className="font-DM text-[64px] font-bold  leading-none">
          FIND CLOTHES <br /> THAT MATCHES <br />
          YOUR STYLE
        </h1>
        <p className="font-inter text-[16px] opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          <br />
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="font-inter bg-black px-[54px] py-[16px] w-[210px] rounded-[62px] text-[16px] text-white ">
          Shop Now
        </button>
        <div className="flex items-center text-[16px] font-inter ">
          <div>
            <h1 className="font-inter text-[40px] font-bold ">200+</h1>
            <p className="opacity-60 ">International Brands</p>
          </div>
          <div className="border-r-[2px] border-l-[2px] px-10 mx-10 ">
            <h1 className="font-inter text-[40px] font-bold ">2000+</h1>
            <p className="opacity-60 ">High-Quality Products</p>
          </div>
          <div>
            <h1 className="font-inter text-[40px] font-bold ">30,000+</h1>
            <p className="opacity-60 ">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-[619.5px] h-full relative overflow-x-visible">
        <div>
          <div className="w-full h-full absolute inset-0 flex items-center justify-center translate-y-[150px] -z-10 ">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-52 translate-x-[-250px] "
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="black"
              />
            </svg>
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[32rem] top-8"
            >
              <path
                d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                fill="black"
              />
            </svg>
            <Image
              src="/ccfd8aa5825862cdb9604a4fb4930464.jpg"
              width={750}
              height={750}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
