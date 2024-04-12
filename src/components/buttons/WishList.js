import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWishlist, removeWish } from "../../utils/redux/WishlistSlice";
import { BytesizeHeart, IlHeart } from "../icons/Icons";

const WishList = ({ data, defaultValue }) => {
    const [isInWishList, setIsInWishList] = useState(defaultValue);
    const dispatch = useDispatch();
    const handleOnClickWishlist = () => {
        dispatch(addWishlist(data));
        setIsInWishList(true);
    };
    const handleOnClickRemoveWishList = () => {
        dispatch(removeWish(data));
        setIsInWishList(false);
    };
    return (
        <button className="z-50 top-4 right-4 absolute">
            {isInWishList ? (
                <IlHeart
                    className="text-2xl"
                    onClick={() => handleOnClickRemoveWishList()}
                />
            ) : (
                <BytesizeHeart
                    onClick={() => handleOnClickWishlist()}
                    className="text-xl"
                />
            )}
        </button>
    );
};

export default WishList;
