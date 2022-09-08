import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`
      ${className ? className : "bg-primary text-white"}
      mx-auto my-4 font-medium py-3 rounded-md w-full max-w-[200px]`}
    >
      {children}
    </button>
  );
};

export default Button;
