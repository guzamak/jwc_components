import Product from "./product";
export default function Products({ title, productArr }) {
  return (
    <div>
      <div className="w-[1239px] flex flex-col items-center space-y-14">
        <h1 className="text-[48px] font-DM font-semibold">{title}</h1>
        <div className="inline-flex w-full justify-between">
          {productArr.map((product,index) => (
            <Product name={product.name} star={product.star} price={product.price} discount={product.discount} image={product.image} key={index}/>
          ))}
        </div>
        <button className=" w-[218px] h-[52px] border-[1px] rounded-[62px] text-[16px] font-inter">View All</button>
      </div>
    </div>
  );
}
