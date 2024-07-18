import Image from "next/image";
export default function Product({ name, star, price, discount, image }) {
  return (
    <div className="space-y-2">
      <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] overflow-hidden p-4">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={"/" + image}
            width={296}
            height={444}
            className="object-center"
          />
        </div>
      </div>
      <h1 className="font-inter font-bold text-[18px]">{name}</h1>
      <div className="flex gap-[2px] items-center">
        {[...Array(Math.floor(star))].map((x, i) => (
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={i}
          >
            <path
              d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
              fill="#FFC633"
            />
          </svg>
        ))}
        {star - Math.floor(star) != 0 && (
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56595 16.7243L8.99999 13.701V0L6.38079 5.63991L0.207535 6.38809L4.76203 10.6219L3.56595 16.7243Z"
              fill="#FFC633"
            />
          </svg>
        )}
        <p className="font-inter text-[14px] ml-[5px]">{star} / 5</p>
      </div>
      <div className="font-inter font-bold text-[24px] ">
        {discount ? (
          <div className="inline-flex gap-[10px] items-center justify-center">
            <p>${price - discount}</p>
            <p className="line-through opacity-40">${price}</p>
            <div className="bg-[#FF3333] bg-opacity-10 w-[58px] h-[27px] flex items-center justify-center rounded-[62px]">
              <p className=" text-[#FF3333] text-[12px] font-normal">
                -{discount}%
              </p>
            </div>
          </div>
        ) : (
          <>${price}</>
        )}
      </div>
    </div>
  );
}
