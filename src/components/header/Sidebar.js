import React, { useEffect, useRef, useState } from "react";
import {
    AkarIconsDiscordFill,
    CibInstagram,
    DeviconTwitter,
    MakiCross,
    MaterialSymbolsLightAccountCircle,
} from "../icons/Icons";
import SidebarAccordian from "../accordians/SidebarAccordian";
import { Link } from "react-router-dom";

const Sidebar = ({ setHamburger, hamburger }) => {
    const [visibleOptions, setVisibleOptions] = useState("");

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setHamburger(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [setHamburger]);

    return (
        <div
            ref={sidebarRef}
            className={`absolute top-0 left-0 bg-black bg-opacity-85 md:w-1/5 h-screen`}
        >
            <button
                onClick={() => setHamburger(!hamburger)}
                className="font-light text-3xl float-right clear-both border p-1 m-2 rounded-lg hover:border-[#ff24aa]"
            >
                <MakiCross />
            </button>
            <div className="flex flex-col ms-6 h-screen justify-center text-lg font-light">
                {/* Social Media */}
                <div className="flex border-b border-[#5e3fde] py-3 px-2">
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AkarIconsDiscordFill className="me-2 text-2xl cursor-pointer" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CibInstagram className="me-2 text-2xl cursor-pointer" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DeviconTwitter className="text-2xl cursor-pointer" />
                    </a>
                </div>
                {/* Accordians */}
                <div className="flex flex-col justify-center border-b border-[#5e3fde] py-3 mt-10 px-2">
                    <SidebarAccordian
                        visibleOptions={visibleOptions === "apperel"}
                        setVisibleOptions={() =>
                            setVisibleOptions(
                                visibleOptions === "apperel" ? "" : "apperel"
                            )
                        }
                        title={"Apperel"}
                        data={[
                            "Tees",
                            "Shirt",
                            "Hoodies",
                            "Joggers",
                            "Head Gear",
                        ]}
                        id={"apperel"}
                    />
                    <SidebarAccordian
                        visibleOptions={visibleOptions === "not-apperel"}
                        setVisibleOptions={() =>
                            setVisibleOptions(
                                visibleOptions === "not-apperel"
                                    ? ""
                                    : "not-apperel"
                            )
                        }
                        title={"Not Apperel"}
                        data={[
                            "Badges",
                            "Bookmarks",
                            "Keychains",
                            "Stickers",
                            "Wall Decor",
                        ]}
                        id={"not-apperel"}
                    />
                    <SidebarAccordian
                        visibleOptions={
                            visibleOptions === "categories-of-culture"
                        }
                        setVisibleOptions={() =>
                            setVisibleOptions(
                                visibleOptions === "categories-of-culture"
                                    ? ""
                                    : "categories-of-culture"
                            )
                        }
                        title={"Categories Of Culture"}
                        data={[
                            "Body Pillow Covers",
                            "Bucket Lists",
                            "Cosplay",
                            "Manga",
                            "Manga Panels",
                        ]}
                        id={"categories-of-culture"}
                    />
                </div>
                {/* Account */}
                <div className="mt-10">
                    <Link to={"/my-account"}>
                        <div className="flex gap-x-2 items-center cursor-pointer hover:text-[#ff24aa]">
                            <span className="text-2xl">
                                <MaterialSymbolsLightAccountCircle />
                            </span>
                            <span>My Account</span>
                        </div>
                    </Link>
                    <ul className="text-md py-3 px-2">
                        <li className="cursor-pointer hover:text-[#ff24aa]">
                            Track Orders
                        </li>
                        <li className="cursor-pointer hover:text-[#ff24aa]">
                            Coupons&Offers
                        </li>
                        <li className="cursor-pointer hover:text-[#ff24aa]">
                            Need Help?
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
