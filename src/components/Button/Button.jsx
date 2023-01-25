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
        <button className="bg-[#9c7eee] rounded-md px-16 py-1 w-10 flex justify-center items-center text-slate-300 font-bold text-lg" onClick={onPopHandler}>Pop</button>
    );
};

export default Button;
