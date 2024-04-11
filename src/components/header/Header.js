import React, { useState } from "react";
import {
    AkarIconsDiscordFill,
    DeviconTwitter,
    CibInstagram,
    PajamasHamburger,
} from "../icons/Icons";
import logo from "../../assets/shinobi.svg";
import Search from "./search/Search";
import {
    BxUser,
    BytesizeCart,
    BytesizeHeart,
    MaterialSymbolsLightLogout,
} from "../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { clearUser } from "../../utils/redux/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
const Header = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const wishlistItems = useSelector((store) => store.wishlist.items);
    const user = useSelector((store) => store.user.user);
    const [hamburger, setHamburger] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(clearUser());
        });
    };
    const handleOnClickWishlist = () => {
        if (user) {
            navigate("/wishlist");
            return;
        } else {
            navigate("/my-account");
            return;
        }
    };
    return (
        <>
            <div className="sticky top-0 z-[100] w-full bg-white">
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

                <div className="">
                    <div className="flex justify-between md:w-4/5 mx-auto text-white items-center">
                        {/* Hamburger Menu */}
                        <div className="w-16">
                            <div className="p-2 text-4xl">
                                {hamburger ? (
                                    <Sidebar
                                        setHamburger={setHamburger}
                                        hamburger={hamburger}
                                    />
                                ) : (
                                    <button
                                        onClick={() => setHamburger(!hamburger)}
                                    >
                                        <PajamasHamburger />
                                    </button>
                                )}
                            </div>
                        </div>
                        {/* LOGO of Shinoby Style */}
                        <div className="hidden sm:block md:w-36 sm:w-24">
                            <Link to="/">
                                {logo ? (
                                    <img
                                        className="md:w-full sm:w-24"
                                        src={logo}
                                        alt="Shinobi Styles"
                                    />
                                ) : (
                                    <p className="font-bold text-2xl text-black">
                                        Shinobi Styles
                                    </p>
                                )}
                            </Link>
                        </div>
                        <div className="flex">
                            <Search />
                            <BytesizeHeart
                                className="ms-2 cursor-pointer text-3xl"
                                loveditems={wishlistItems?.length}
                                onClick={() => handleOnClickWishlist()}
                            />
                            <Link to={"/cart"}>
                                <BytesizeCart
                                    className="ms-2 cursor-pointer text-3xl"
                                    cartitems={cartitems?.length}
                                />
                            </Link>
                            {user ? (
                                <button onClick={() => handleLogOut()}>
                                    <MaterialSymbolsLightLogout className="ms-2 text-3xl" />
                                </button>
                            ) : (
                                <Link to={"/my-account"}>
                                    <BxUser className="ms-2 cursor-pointer text-3xl" />
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
