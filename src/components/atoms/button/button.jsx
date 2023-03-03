import React, { useState } from "react";

export const Button = ({ text, border, background }) => {
  const [clickAnimation, setClickAnimation] = useState(false);
  return (
    <button
      className={`py-3 px-5 w-max rounded-full inline-block 
      ${border ? "border border-solid border-black" : ""}
      ${background ? background : ""}

      ${clickAnimation ? "animate-scale-click" : ""}
      `}
      onClick={() => setClickAnimation(true)}
      onAnimationEnd={() => setClickAnimation(false)}
    >
      {text}
    </button>
  );
};

export default Button;
