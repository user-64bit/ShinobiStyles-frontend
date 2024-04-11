import React from "react";
import { useDispatch } from "react-redux";
import { removeWish } from "../../utils/redux/WishlistSlice";
import { ZmdiDelete } from "../icons/Icons";

const RemoveWish = ({ item }) => {
    const dispatch = useDispatch((store) => store.wishlist.items);
    const handleRemoveWishListItem = (item) => {
        dispatch(removeWish(item));
    };
    return (
        <button onClick={() => handleRemoveWishListItem(item)}>
            <ZmdiDelete />
        </button>
    );
};

export default RemoveWish;
