import React, { useState } from "react";
import {
    AkarIconsDiscordFill,
    DeviconTwitter,
    CibInstagram,
} from "../icons/Icons";
import Dropdown from "./dropdown/Dropdown";
import logo from "../../assets/logo2.svg";
import Search from "./search/Search";
import { BxUser, BytesizeCart, BytesizeHeart } from "../icons/Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HamburgureMenu from "./HamburgureMenu";
const reverseColour = {
    WebkitFilter: "grayscale(1) invert(1)",
    filter: "grayscale(1) invert(1)",
};
const shadowPng = {
    WebkitFilter: "grayscale(1) invert(1) drop-shadow(8px 8x 4px #222)",
    filter: "grayscale(1) invert(1) drop-shadow(5px 5px 5px #222)",
};

const Header = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const wishlistItems = useSelector((store) => store.wishlist.items);

    // console.log(window.location.href);
    return (
        <>
            {/* FIXME: Routing, Animations */}
            {/* <div className="fixed w-full"> */}
            <div className="absolute top-0 z-50 w-full">
                <div className="flex justify-between bg-[#172d3b] p-3">
                    <div className="flex">
                        <a href="https://discord.com" target="_blank">
                            <AkarIconsDiscordFill className="me-2 text-md cursor-pointer" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <CibInstagram className="me-2 text-md cursor-pointer" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <DeviconTwitter className="text-md cursor-pointer" />
                        </a>
                    </div>
                    {/* Track Order, Coupons, offer, Help */}
                    <div className="text-[#28B4FB] uppercase text-xs">
                        <span className="mx-1">Track Order</span>
                        <span className="mx-1">Coupons & Offers</span>
                        <span className="mx-1">Need Help?</span>
                    </div>
                </div>

                {/* This is literally the navabar with dropdowns */}
                <div
                    className={`flex flex-row md:items-center justify-between md:justify-around text-white`}
                >
                    {/* Classic Dropdown till medium screen size */}
                    <div className="hidden md:flex">
                        {/* Top Categories */}
                        <Dropdown
                            navTitle={"Top Categories"}
                            navItems={[
                                "Hoodies/Jackets",
                                "Oversized Tees",
                                "Shirts",
                                "Manga",
                                "Sticker",
                                "Wall Decor",
                                "Cosplay",
                            ]}
                            downArrow={true}
                        />

                        {/* Shop by Product */}
                        <Dropdown
                            navTitle={"Shop by Product"}
                            navItems={["A", "B", "C", "D"]}
                            downArrow={true}
                        />

                        {/* Shop by Anime */}
                        <Dropdown
                            navTitle={"Shop by Anime"}
                            navItems={["A", "B", "C", "D"]}
                            downArrow={true}
                        />
                    </div>
                    {/* Hamburger Menu */}
                    <div className="flex md:hidden h-12 bg-purple-600 w-full">
                        <HamburgureMenu />
                    </div>
                    {/* LOGO of Shinoby Style */}
                    <div className="hidden md:block">
                        <Link to="/">
                            <img
                                className="w-80"
                                src={logo}
                                alt="Shinobi Styles"
                                style={shadowPng}
                            />
                        </Link>
                    </div>
                    <div className="flex md:relative absolute right-0 justify-between md:text-white h-12 items-center">
                        <Search />
                        <Link to={"/my-account"}>
                            <BxUser
                                className="ms-2 cursor-pointer text-2xl text-black"
                                style={reverseColour}
                            />
                        </Link>
                        <BytesizeHeart
                            className="ms-2 cursor-pointer text-2xl"
                            style={reverseColour}
                            loveditems={wishlistItems?.length}
                        />
                        <BytesizeCart
                            className="ms-2 cursor-pointer text-2xl"
                            style={reverseColour}
                            cartitems={cartitems?.length}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
