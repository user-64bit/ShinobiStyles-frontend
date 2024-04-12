import React, { useState } from "react";
import { IlHeart, LaHeart } from "../icons/Icons";
import { useDispatch } from "react-redux";
import { addWishlist, removeWish } from "../../utils/redux/WishlistSlice";
import { useSelector } from "react-redux";

const WishListBtn = ({ data }) => {
    const wishListItems = useSelector((store) => store.wishlist.items);
    const [isInWishList, setIsInWishList] = useState(
        true ? wishListItems.includes(data) : false
    );
    const dispatch = useDispatch();
    const handleOnClickWishlist = () => {
        dispatch(addWishlist(data));
        setIsInWishList(!isInWishList);
    };
    const handleOnClickRemoveWishList = () => {
        dispatch(removeWish(data));
        setIsInWishList(!isInWishList);
    };
    return (
        <button className="mt-3 py-2 px-4 border flex">
            {isInWishList ? (
                <IlHeart
                    className="text-xl"
                    onClick={handleOnClickRemoveWishList}
                />
            ) : (
                <LaHeart className="text-xl" onClick={handleOnClickWishlist} />
            )}
            <p className="ps-2">Wishlist</p>
        </button>
    );
};

export default WishListBtn;
