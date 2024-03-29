import React from "react";
import {
    AkarIconsDiscordFill,
    DeviconTwitter,
    CibInstagram,
} from "../icons/Icons";
import logo from "../../assets/logo2.svg";
import Search from "./search/Search";
import {
    BxUser,
    BytesizeCart,
    BytesizeHeart,
    MaterialSymbolsLightLogout,
} from "../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HamburgureMenu from "./HamburgureMenu";
import { auth } from "../../utils/firebase";
import { clearUser } from "../../utils/redux/userSlice";
import { signOut } from "firebase/auth";

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
    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(clearUser());
        });
    };
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

                <div className="bg-black bg-opacity-10">
                    <div
                        className={`flex justify-between w-4/5 mx-auto text-white items-center `}
                    >
                        {/* Hamburger Menu */}
                        <div className="">
                            <HamburgureMenu />
                        </div>
                        {/* LOGO of Shinoby Style */}
                        <div className="w-72">
                            <Link to="/">
                                <img
                                    className=""
                                    src={logo}
                                    alt="Shinobi Styles"
                                    style={shadowPng}
                                />
                            </Link>
                        </div>
                        <div className="flex">
                            <Search />
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
                            {user ? (
                                <button onClick={() => handleLogOut()}>
                                    <MaterialSymbolsLightLogout className="ms-2 text-2xl" />
                                </button>
                            ) : (
                                <Link to={"/my-account"}>
                                    <BxUser
                                        className="ms-2 cursor-pointer text-2xl"
                                        style={reverseColour}
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
