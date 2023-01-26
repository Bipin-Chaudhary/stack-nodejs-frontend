import React from "react";
import StackItem from "./StackItem";

const StackList = (props) => {
  return props.stacks.map((ele) => {
    return (
      <ul key={ele.toString() + Math.random()}>
        <StackItem element={ele} />
      </ul>
    );
  });
};

export default StackList;
