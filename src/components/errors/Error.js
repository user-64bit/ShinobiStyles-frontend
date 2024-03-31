import React from "react";
import Image from "../../assets/luffy.jpg";
const Error = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto text-center">
                    <img src={Image} alt="Where the hell are you going?" />
                    <p className="pt-4">Minami no shimawaaa atakai ♪</p>
                    <p>Paina-puru-puru, Atama boka boka,</p>
                    <p>Aho baakaaaaaaa!</p>
                </div>
            </div>
        </>
    );
};

export default Error;
