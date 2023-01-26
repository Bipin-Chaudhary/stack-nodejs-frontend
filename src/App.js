import React, { useState, useEffect } from "react";
import StackList from "./components/Stack/StackList";
import Button from "./components/Button/Button";
import NewStack from "./components/Stack/NewStack";
import { getApi, postApi } from "./service/api";

function App() {
  const [stacks, setStacks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const data = await getApi();

      setStacks(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const addStackHandler = async (stack) => {
    try {
      const res = await postApi({ element: stack });
      if (!res?.data) {
        return setErrorMessage(res.message);
      }

      setStacks((prevStacks) => [...prevStacks, stack]);
      setErrorMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const errorMessageHandler = async (msg) => {
    if (msg) return setErrorMessage(msg);

    setErrorMessage("");
  };

  return (
    <div>
      <header className="ml-5 text-3xl text-center m-9 font-medium text-slate-300">
        <p>Welcome to Stack NodeJS App</p>
      </header>
      <div className="flex flex-row justify-center">
        <div className=" w-1/2 flex flex-col justify-center items-center gap-10 h-[600px]">
          <div className=" w-1/2 p-10">
            <p className="text-center text-red-400 bold-md text-2xl">
              {errorMessage}
            </p>
          </div>
          <div className=" w-1/2 grid grid-rows-3 gap-3 p-10">
            <NewStack
              onError={errorMessageHandler}
              onAddStack={addStackHandler}
            />
            <Button onError={errorMessageHandler} updateData={getData} />
          </div>
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center gap-1 h-[600px] overflow-auto">
          <StackList stacks={stacks} />
        </div>
      </div>
    </div>
  );
}

export default App;
