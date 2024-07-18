import Products from "./products";

export default function ProductView() {
  const productslist = [
    [
      {
        name: "T-SHIRT WITH TAPE DETAILS",
        star: 4.5,
        price: 120,
        discount: 0,
        image: "a7234235e66d6695d9d7098fc3289872.png",
      },
      {
        name: "SKINNY FIT JEANS",
        star: 3.5,
        price: 260,
        discount: 20,
        image: "ff941dde9bc0e54431b8d8fe3182f5e9.png",
      },
      {
        name: "CHECKERED SHIRT",
        star: 4.5,
        price: 180,
        discount: 0,
        image: "5fc84f87eeac1062fbe47f49c192d4f2.png",
      },
      {
        name: "SLEEVE STRIPED T-SHIRT",
        star: 4.5,
        price: 160,
        discount: 30,
        image: "7cc557f42cf1d489f7cc811856b90e9f.png",
      },
    ],
    [
      {
        name: "VERTICAL STRIPED SHIRT",
        star: 5,
        price: 232,
        discount: 20,
        image: "d9029bd465a4c7158689ab1619693014.png",
      },
      {
        name: "COURAGE GRAPHIC T-SHIRT",
        star: 4,
        price: 145,
        discount: 0,
        image: "d5fcac5632cf6823570ca2d1d53d7d73.png",
      },
      {
        name: "LOOSE FIT BERMUDA SHORTS",
        star: 3,
        price: 80,
        discount: 0,
        image: "4a66d9ca1401101dee4cc689f8bb5ad2.png",
      },
      {
        name: "FADED SKINNY JEANS",
        star: 4.5,
        price: 210,
        discount: 0,
        image: "08e2ff8a46be56aa933f031aed3abe75.png",
      },
    ],
  ];
  return (
    <div className=" my-24">
      <Products title={"NEW ARRIVALS"} productArr={productslist[0]}/>
      <div className="w-[1239px]  h-[1px] bg-[#000000] opacity-10 my-16"></div>
      <Products title={"TOP SELLING"} productArr={productslist[1]}/>
    </div>
  );
}
