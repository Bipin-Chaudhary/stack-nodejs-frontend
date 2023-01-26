import React, { useState } from "react";

function NewStack(props) {
    const [enteredElement, setEnteredElement] = useState("");

    function onSubmitHandler(event) {
        if (!enteredElement) return props.onError("Please enter a number!");

        if (parseInt(enteredElement) > 1000 || parseInt(enteredElement) < 0) {
            setEnteredElement("");
            return props.onError("Please enter a number between 0 to 1000!");
        }

        props.onAddStack(enteredElement);

        props.onError("");
        setEnteredElement("");
    }

    function onChangeHandler(event) {
        setEnteredElement(event.target.value);
    }

    return (
        <div className=" gap-3 grid row-span-2">
            <input
                className=" dark:text-slate-300 bg-[#9c7eee] border border-[#4c05d0] rounded-lg h-10 p-5 w-4/5 justify-self-center dark:placeholder-slate-300 text-sm focus:ring-[#4c05d0] focus:border-[#4c05d0]"
                type="number"
                required
                value={enteredElement}
                onChange={onChangeHandler}
                placeholder="Enter a number"
                min="0"
                max="1000"
            />
            <button
                className="px-10 py-3 bg-[#9c7eee] rounded-md text-slate-300 font-bold text-lg w-1/2 justify-self-center"
                type="submit"
                onClick={onSubmitHandler}
            >
                Push
            </button>
        </div>
    );
}

export default NewStack;
