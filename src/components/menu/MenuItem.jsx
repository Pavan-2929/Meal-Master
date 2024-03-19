import Image from "next/image";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-black text-center py-4 hover:bg-charcoal hover:cursor-pointer rounded-md hover:shadow-sm hover:shadow-snow">
      <div className="flex justify-center mb-4">
        <Image src={"/pizza.png"} height={150} width={150} alt="Pizza" className="h-auto w-auto"></Image>
      </div>
      <h4 className="font-semibold text-sm">Pepperoni pizza</h4>
      <p className="text-gray text-sm w-[80%] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <button className="mt-4 bg-snow text-black rounded-full px-6 py-2">
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
