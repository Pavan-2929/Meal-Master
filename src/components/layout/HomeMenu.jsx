import Image from "next/image";
import React from "react";
import SectionHeaders from "./SectionHeader";
import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
  return (
    <section>

    <div className="flex justify-between items-center mt-8">
      <div className="flex-none">
        <Image src={"/sallad1.png"} width={150} height={150} />
      </div>
      <div className="text-center">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Our Menu"} />
      </div>
      <div className="flex-none">
        <Image src={"/sallad2.png"} width={150} height={150} />
      </div>
    </div>
    <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto my-8">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
    </section>
  );
};

export default HomeMenu;
