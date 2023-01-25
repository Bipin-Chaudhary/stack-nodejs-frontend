import React, { useState } from "react";

function NewStack(props) {
    const [enteredElement, setEnteredElement] = useState("");

    function onSubmitHandler(event) {
        props.onAddStack(enteredElement);
    }

    function onChangeHandler(event) {
        setEnteredElement(event.target.value);
    }

    return (
        <div className="flex flex-row gap-5">
            <input
                className=" text-[#4c05d0] rounded-md"
                type="number"
                id="add-element"
                required
                onChange={onChangeHandler}
            />
            <button className="px-12 py-1 bg-[#9c7eee] rounded-md text-slate-300 font-bold text-lg" type="submit" onClick={onSubmitHandler}>
                Push
            </button>
        </div>
    );
}

export default NewStack;
