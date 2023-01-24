import StackItem from "./StackItem";

const StackList = (props) => {
  return props.stack.map((ele) => {
    return (
      <ul >
        <StackItem element={ele}/>
      </ul>
    );
  });
};

export default StackList;
