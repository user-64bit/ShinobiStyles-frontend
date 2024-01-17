import Dropdown from "./dropdown/Dropdown";
import React from "react";
import logo from "../../assets/logo.png";
import Search from "./search/Search";
import { IMAGES } from "../../config";
import Carousel from "./carousel/Carousel";
import { BxUser, BytesizeCart, BytesizeHeart } from "../icons/Icons";
import { useSelector } from "react-redux";
const reverseColour = {
    WebkitFilter: "grayscale(1) invert(1)",
    filter: "grayscale(1) invert(1)",
};

const Navbar = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const wishlistItems = useSelector((store) => store.wishlist.items);
    return (
        <>
            <div>
                <Carousel IMAGES={IMAGES} />
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex justify-between w-[80%] mx-auto">
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
                        <img
                            src={logo}
                            alt="Shinobi Styles"
                            className="relative -top-10"
                            style={reverseColour}
                        />
                    </div>
                    <div className="flex">
                        <Search />
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
        </>
    );
};
export default Navbar;
