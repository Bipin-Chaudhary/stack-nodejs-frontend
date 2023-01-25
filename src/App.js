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
    <div className="App">
      <header className="App-header">
        <p>Welcome to Stack NodeJS App</p>
      </header>
      <div>
        <StackList stacks={stacks} />
      </div>
      <Button updateData={getData} />
      <NewStack onAddStack={addStackHandler} />
    </div>
  );
}

export default App;
