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
        <div>
            <p>
                <label htmlFor="add-element"></label>
                <input
                    type="number"
                    id="add-element"
                    required
                    onChange={onChangeHandler}
                />
            </p>
            <button type="submit" onClick={onSubmitHandler}>
                Push
            </button>
        </div>
    );
}

export default NewStack;
