import { useState } from "react";
import React from "react";
import { EvaArrowIosDownwardOutline } from "../../icons/Icons";

const Dropdown = ({ navTitle, navItems, downArrow = false, ...props }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseLeave={() => setOpen(false)}
            className="pt-3 text-white"
            {...props}
        >
            <button
                onMouseOver={() => setOpen(true)}
                className="flex items-center  p-2 bg-transparent"
            >
                <span className="mr-2 uppercase text-xs">{navTitle}</span>
                {downArrow ? <EvaArrowIosDownwardOutline /> : false}
            </button>
            <ul
                className={`py-2 mt-2 rounded-lg shadow-xl ${
                    open ? "block" : "hidden"
                }`}
            >
                {navItems.map((li, id) => {
                    return (
                        <>
                            <li
                                className="flex w-full items-center px-3 py-2 text-sm bg-gray-500 hover:bg-opacity-90"
                                key={id}
                            >
                                {li}
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};
export default Dropdown;
