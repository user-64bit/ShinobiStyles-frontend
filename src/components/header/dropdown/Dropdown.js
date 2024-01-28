import { useState } from "react";
import React from "react";
import { EvaArrowIosDownwardOutline } from "../../icons/Icons";

const Dropdown = ({ navTitle, navItems, downArrow = false, ...props }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseLeave={() => setOpen(false)}
            className="pt-3 text-white relative" // Add relative positioning to the parent div
            {...props}
        >
            <button
                onMouseOver={() => setOpen(true)}
                className="flex items-center  p-2 bg-transparent"
            >
                <span className="mr-2 uppercase text-xs font-bold">
                    {navTitle}
                </span>
                {downArrow ? <EvaArrowIosDownwardOutline /> : false}
            </button>
            <ul
                className={`w-[200px] absolute -right-5 top-10 py-2 mt-2 rounded-lg shadow-xl ${
                    open ? "block" : "hidden"
                }`}
            >
                {navItems.map((li, id) => (
                    <>
                        <li
                            className="flex pt-6 justify-center bg-[#d9e2e6] 
                            text-sm transition-all text-[#172d3b] hover:text-blue-500 hover:ease-in-out break-words"
                            key={id}
                        >
                            <div
                                className={`pb-2 text-center border-gray-500 w-3/5 ${
                                    navItems.length - 1 === id
                                        ? "border-0"
                                        : "border-b"
                                }`}
                            >
                                {li}
                            </div>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
