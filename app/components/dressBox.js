import Image from "next/image";
export default function DressBox() {
  return (
    <div className="w-[1239px] h-[866px] rounded-[40px] bg-[#F0F0F0] flex flex-col items-center my-10 -z-30 py-[68px]">
      <h1 className="text-[48px] font-DM font-bold pb-[68px]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-8 grid-rows-2 gap-4 w-full h-full px-[64px] text-[36px] font-bold">
        <div className=" col-span-3 rows-span-1 bg-white rounded-[20px] overflow-hidden  relative -z-20">
          <h1 className="px-[36px] py-[27px] z-10">Casual</h1>
          <div className="w-full h-full absolute scale-x-[-200%] scale-[200%]   top-5 left-0 -z-10">
            <Image
              src="/a32d9a769caba77c08e107a9198dcd6d.png"
              layout="fill"
              className="object-top"
            />
          </div>
        </div>
        <div className=" col-span-5 row-span-1 bg-white rounded-[20px] overflow-hidden  relative -z-20">
          <h1 className="px-[36px] py-[27px] z-10">Formal</h1>
          <div className="w-full h-full absolute  scale-[175%] bottom-7 left-80 -z-10">
            <Image
              src="/8bdbe2c750dcc6e834bf1d98a4a73b29.png"
              width={750}
              height={750}
              className="object-top"
            />
          </div>
        </div>
        <div className=" col-span-5 rows-span-2 bg-white rounded-[20px] overflow-hidden  relative -z-20">
          <h1 className="px-[36px] py-[27px] z-10">Party</h1>
          <div className="w-full h-full absolute  scale-[100%] bottom-36 left-36 -z-10">
            <Image
              src="/82cd85a823c989c1c8631bd976e2cbfb.png"
              width={750}
              height={750}
              className="object-top"
            />
          </div>
        </div>
        <div className=" col-span-3 rows-span-2 bg-white rounded-[20px] overflow-hidden  relative -z-20">
          <h1 className="px-[36px] py-[27px] z-[11]">Gym</h1>
          <div className="w-full h-full absolute  scale-[100%] bottom-28 left-20 -z-[11]">
            <Image
              src="/c17a220fe8bfb1126626f3ab58a761ec.png"
              width={750}
              height={750}
              className="object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
