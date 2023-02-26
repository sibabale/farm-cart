import React from "react";

export const Button = ({ text, border, background }) => {
  return (
    <button
      className={`py-3 px-5 w-max rounded-full inline-block 
      ${border ? "border border-solid border-black" : ""}
      ${background ? background : ""}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
