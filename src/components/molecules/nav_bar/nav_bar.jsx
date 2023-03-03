import React, { useEffect, useState } from "react";

export const Navbar = (props) => {
  const [clickedItem, setClickedItem] = useState("");
  const [atTopOfPage, setAtTopOfPage] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);

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
        <li
          className={`px-10 cursor-pointer ${
            clickAnimation && clickedItem === "why" ? "animate-scale-click" : ""
          }`}
          onClick={() => {
            setClickAnimation(true);
            setClickedItem("why");
          }}
          onAnimationEnd={() => setClickAnimation(false)}
        >
          why?
        </li>
        <li
          className={`px-10 cursor-pointer ${
            clickAnimation && clickedItem === "animals"
              ? "animate-scale-click"
              : ""
          }`}
          onClick={() => {
            setClickAnimation(true);
            setClickedItem("animals");
          }}
          onAnimationEnd={() => setClickAnimation(false)}
        >
          animals
        </li>
        <li
          className={`px-10 cursor-pointer ${
            clickAnimation && clickedItem === "deals"
              ? "animate-scale-click"
              : ""
          }`}
          onClick={() => {
            setClickAnimation(true);
            setClickedItem("deals");
          }}
          onAnimationEnd={() => setClickAnimation(false)}
        >
          deals
        </li>
      </ul>
      <div className="flex items-center">
        <span
          className={`cursor-pointer material-symbols-rounded  ${
            clickAnimation && clickedItem === "cart"
              ? "animate-scale-click"
              : ""
          }`}
          onClick={() => {
            setClickAnimation(true);
            setClickedItem("cart");
          }}
          onAnimationEnd={() => setClickAnimation(false)}
        >
          shopping_cart
        </span>
        <div
          className={`p-2 ml-3 rounded-full bg-gray-300 cursor-pointer  ${
            clickAnimation && clickedItem === "profile"
              ? "animate-scale-click"
              : ""
          }`}
          onClick={() => {
            setClickAnimation(true);
            setClickedItem("profile");
          }}
          onAnimationEnd={() => setClickAnimation(false)}
        >
          <span className="material-symbols-rounded">person</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
