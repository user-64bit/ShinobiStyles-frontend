import React, { useState } from "react";
import { PajamasHamburger } from "../icons/Icons";

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
                        X
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
