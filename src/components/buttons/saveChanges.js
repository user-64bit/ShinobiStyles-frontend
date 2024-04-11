import React, { useState } from "react";
import { BytesizeUpload } from "../icons/Icons";
import { useDispatch } from "react-redux";
import { updateItem } from "../../utils/redux/cartSlice";

const SaveChanges = ({ item, quantity }) => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };
    const handleItemUpdate = () => {
        const newItem = {
            ...item,
            quantity: quantity,
        };
        dispatch(updateItem(newItem));
    };
    return (
        <>
            {item.quantity !== quantity ? (
                <button
                    className=""
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleItemUpdate()}
                >
                    <BytesizeUpload />
                    {hover ? (
                        <p className="absolute bg-black text-white p-2 bg-opacity-70 rounded-lg">
                            Save Changes
                        </p>
                    ) : (
                        ""
                    )}
                </button>
            ) : (
                ""
            )}
        </>
    );
};
export default SaveChanges;
