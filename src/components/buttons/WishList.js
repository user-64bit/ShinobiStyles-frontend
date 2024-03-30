import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWishlist, removeWish } from "../../utils/redux/WishlistSlice";
import { BytesizeHeart, IlHeart } from "../icons/Icons";

const WishList = ({ data }) => {
    const [isInWishList, setIsInWishList] = useState(false);
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
