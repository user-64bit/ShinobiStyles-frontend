import React from "react";
import ReactDOM from "react-dom/client";
import {
    AkarIconsDiscordFill,
    DeviconTwitter,
    CibInstagram,
} from "../icons/Icons";

const Header = () => {
    return (
        <>
            {/* FIXME: Routing, Animations */}
            {/* <div className="fixed w-full"> */}
            <div className="flex justify-between bg-[#172d3b] p-3">
                <div className="flex">
                    <AkarIconsDiscordFill className="me-2 text-md" />
                    <CibInstagram className="me-2 text-md" />
                    <DeviconTwitter className="text-md" />
                </div>

                {/* Floating Text about Discounts (maybe) */}
                <div className="text-white">
                    <span>7.5% Discounts using SHINOBI Code</span>
                </div>
                {/* Track Order, Coupons, offer, Help */}
                <div className="text-[#28B4FB] uppercase text-xs">
                    <span className="mx-1">Track Order</span>
                    <span className="mx-1">Coupons & Offers</span>
                    <span className="mx-1">Need Help?</span>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Header;
