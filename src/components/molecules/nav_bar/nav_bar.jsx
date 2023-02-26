import React, { useEffect, useState } from "react";

export const Navbar = (props) => {
  const [atTopOfPage, setAtTopOfPage] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!atTopOfPage) setAtTopOfPage(true);
    } else {
      if (atTopOfPage) setAtTopOfPage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [atTopOfPage]);

  return (
    <div
      className={`p-5 w-full bg-white flex justify-between fixed  ${
        atTopOfPage ? "shadow-md" : ""
      }`}
    >
      <h1 className="text-2xl">farm cart</h1>
      <ul className="list-none flex justify-around">
        <li className="px-10">why?</li>
        <li className="px-10">animals</li>
        <li className="px-10">deals</li>
      </ul>
      <div className="flex items-center">
        <span class="cursor-pointer material-symbols-rounded">
          shopping_cart
        </span>
        <div className="p-2 ml-3 rounded-full bg-gray-300 cursor-pointer">
          <span class="material-symbols-rounded">person</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
