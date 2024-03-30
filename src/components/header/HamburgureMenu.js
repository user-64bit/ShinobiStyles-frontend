import React, { useState } from "react";
import { MakiCross, PajamasHamburger } from "../icons/Icons";

const HamburgureMenu = () => {
    const [hamburger, setHamburger] = useState(false);
    return (
        <>
            <div className="p-2 text-4xl">
                {hamburger ? (
                    <button
                        onClick={() => setHamburger(!hamburger)}
                        className="font-bold"
                    >
                        <MakiCross />
                    </button>
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
