import React from "react";
import { deleteApi } from "../service/api";

const Button = (props) => {
    async function onPopHandler() {
        try {
            await deleteApi("stack");
            props.updateData();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={onPopHandler}>Pop</button>
        </div>
    );
};

export default Button;
