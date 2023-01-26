import React from "react";
import { deleteApi } from "../service/api";

const Button = (props) => {
    async function onPopHandler() {
        try {
            const res = await deleteApi("stack");
            if (!res?.data) {
                return props.onError(res.message);
            }
            props.updateData();

            props.onError("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button
            className=" bg-[#9c7eee] rounded-md px-10 py-3 text-slate-300 font-bold text-lg w-1/2 justify-self-center "
            onClick={onPopHandler}
        >
            Pop
        </button>
    );
};

export default Button;
