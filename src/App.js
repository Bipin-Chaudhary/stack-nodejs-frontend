import React, { useState, useEffect } from "react";
import StackList from "./components/Stack/StackList";
import Button from "./components/Button/Button";
import NewStack from "./components/Stack/NewStack";
import { getApi, postApi } from "./components/service/api";

function App() {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const data = await getApi("stack");

      setStacks(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const addStackHandler = async (stack) => {
    try {
      setStacks((prevStacks) => [stack, ...prevStacks]);

      await postApi("stack", { element: stack });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="ml-5 text-3xl text-center m-9 font-medium text-slate-300">
        <p>Welcome to Stack NodeJS App</p>
      </header>
      <div className="flex flex-row justify-center"> 
        <div className="w-1/2 flex justify-center items-center gap-10 h-[600px]">
          <NewStack onAddStack={addStackHandler} />
          <Button updateData={getData} />
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center gap-1 h-[600px] overflow-auto"  >
          <StackList stacks={stacks} />
        </div>
      </div>
    </div>
  );
}

export default App;
