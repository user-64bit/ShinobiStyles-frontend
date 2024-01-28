import React from "react";
import {
    AkarIconsDiscordFill,
    DeviconTwitter,
    CibInstagram,
} from "../icons/Icons";
import Dropdown from "./dropdown/Dropdown";
import logo from "../../assets/logo.png";
import Search from "./search/Search";
import { IMAGES } from "../../config";
import Carousel from "./carousel/Carousel";
import { BxUser, BytesizeCart, BytesizeHeart } from "../icons/Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const reverseColour = {
    WebkitFilter: "grayscale(1) invert(1)",
    filter: "grayscale(1) invert(1)",
};
const shadowPng = {
    WebkitFilter: "grayscale(1) invert(1) drop-shadow(8px 8x 4px #222)",
    filter: "grayscale(1) invert(1) drop-shadow(5px 5px 5px #222)",
};

const Header = ({ allCards, carousel = true }) => {
    const cartitems = useSelector((store) => store.cart.items);
    const wishlistItems = useSelector((store) => store.wishlist.items);
    return (
        <>
            {/* FIXME: Routing, Animations */}
            {/* <div className="fixed w-full"> */}
            <div className="relative top-0 z-50">
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

                {/* This is literally the navabar with dropdowns */}
                <div className="flex flex-row items-center justify-around">
                    <div className="flex">
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

                        {/* Top Categories */}
                        <Dropdown
                            navTitle={"Shop by Product"}
                            navItems={["A", "B", "C", "D"]}
                            downArrow={true}
                        />

                        {/* Top Categories */}
                        <Dropdown
                            navTitle={"Shop by Anime"}
                            navItems={["A", "B", "C", "D"]}
                            downArrow={true}
                        />
                    </div>

                    <div className="w-80">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Shinobi Styles"
                                style={shadowPng}
                            />
                        </Link>
                    </div>
                    <div className="flex">
                        <Search data={allCards} />
                        <BxUser
                            className="ms-2 cursor-pointer text-2xl"
                            style={reverseColour}
                        />
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
            {carousel ? <Carousel IMAGES={IMAGES} /> : null}
        </>
    );
};

export default Header;
