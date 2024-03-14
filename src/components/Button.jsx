import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="bg-slate-800 text-white p-4 m-3"
        onClick={props.action}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
