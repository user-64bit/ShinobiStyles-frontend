import React, { useState } from "react";
import { PajamasHamburger } from "../icons/Icons";
import Sidebar from "./Sidebar";

const HamburgureMenu = () => {
    const [hamburger, setHamburger] = useState(false);
    return (
        <>
            <div className="p-2 text-4xl">
                {hamburger ? (
                    <Sidebar
                        setHamburger={setHamburger}
                        hamburger={hamburger}
                    />
                ) : (
                    <button onClick={() => setHamburger(!hamburger)}>
                        <PajamasHamburger />
                    </button>
                )}
            </div>
        </>
    );
};

export default HamburgureMenu;
