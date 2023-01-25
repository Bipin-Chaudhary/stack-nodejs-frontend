import React from "react";

function StackItem(props) {
  return (
    <div className="bg-[#9c7eee] container w-20 text-center p-2 text-slate-300 font-bold text-xl rounded-md">
      <h3>{props.element}</h3>
    </div>
  );
}

export default StackItem;
