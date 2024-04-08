import React, { useState } from "react";

const SidebarAccordian = ({ title, data }) => {
    const [visibleOptions, setVisibleOptions] = useState(false);
    return (
        <div>
            <button
                onClick={() => setVisibleOptions(!visibleOptions)}
                className="hover:text-[#ff24aa]"
            >
                {title}
            </button>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <button
                                className={`text-white ${
                                    visibleOptions ? "" : "hidden"
                                }`}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SidebarAccordian;
