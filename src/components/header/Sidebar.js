import React from "react";
import { MakiCross } from "../icons/Icons";
import SidebarAccordian from "../accordians/SidebarAccordian";

const Sidebar = ({ setHamburger, hamburger }) => {
    return (
        <div
            className={`absolute top-0 left-0 border bg-black w-1/5 h-screen transition-all duration-500 ease-in-out ${
                hamburger ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <button
                onClick={() => setHamburger(!hamburger)}
                className="font-light text-3xl float-right clear-both border p-1 m-2 rounded-lg hover:border-[#ff24aa]"
            >
                <MakiCross />
            </button>
            <div className="flex flex-col items-center h-screen border text-xl">
                <div className="flex flex-col h-[80%] justify-center">
                    <div className="border-b">
                        <SidebarAccordian
                            title={"Apperel"}
                            data={["option1", "option2"]}
                        />
                    </div>
                    <div className="border-b">
                        <SidebarAccordian
                            title={"Apperel"}
                            data={["option1", "option2"]}
                        />
                    </div>
                    <div className="border-b">
                        <SidebarAccordian
                            title={"Apperel"}
                            data={["option1", "option2"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
