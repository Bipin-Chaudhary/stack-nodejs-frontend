import React, { useState } from 'react';

function NewStack() {

    const [enteredElement, setEnteredElement] = useState('')

    function changeInputHandler(event) {
        setEnteredElement(event.target.value)
    }

    return (
        <form >
            <p>
                <label htmlFor="add-element">Add Element</label>
                <input type="number" id="add-element" required onChange={changeInputHandler} />
            </p>
            <p>{enteredElement}</p>
        </form>
    );
}

export default NewStack;