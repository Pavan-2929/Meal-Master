import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black flex justify-around p-4 items-center">
      <div className="text-[1.5rem]">
        <p>Meal-Master</p>
      </div>
      <div className="flex gap-4 items-center text-[1.1rem] text-gray">
        <Link
          href={"/"}
          className="transition duration-300 hover:text-white hover:bg-charcoal p-2 rounded-full px-4"
        >
          Home
        </Link>
        <Link
          href={"/"}
          className="transition duration-300 hover:text-white hover:bg-charcoal p-2 rounded-full px-4"
        >
          Menu
        </Link>
        <Link
          href={"/"}
          className="transition duration-300 hover:text-white hover:bg-charcoal p-2 rounded-full px-4"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="transition duration-300 hover:text-white hover:bg-charcoal p-2 rounded-full px-4"
        >
          Contact
        </Link>
        <Link
          href={"login"}
          className="bg-red rounded-full p-2 px-4 text-white ml-4"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
