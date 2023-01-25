import React from 'react';
import StackItem from './StackItem';

const DUMMY_STACK = [1, 2, 3, 4, 5];

const StackList = (props) => {
  return DUMMY_STACK.map((ele) => {
    return (
      <ul >
        <StackItem element={ele} />
      </ul>
    );
  });
};

export default StackList;
