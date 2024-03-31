import React, { useState } from "react";
import { BytesizeUpload, ZmdiDelete } from "../icons/Icons";
import QuantityCounter from "../buttons/QuantityCounter";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../utils/redux/cartSlice";

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const handleRemoveCartItem = () => {
        dispatch(removeItem(item));
    };
    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };
    const hadbleItemUpdate = () => {
        const newItem = {
            ...item,
            quantity: quantity,
        };
        dispatch(updateItem(newItem));
    };
    return (
        <tr className="text-center">
            <td className="w-3/5" colSpan={2}>
                <div className="flex items-center gap-x-10 w-full p-2">
                    <img src={item.image} className="w-36 object-cover" />
                    <div className="font-bold">
                        <p className="text-gray-900">{item.title}</p>
                        <p className="text-gray-900">
                            RS. {item.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </td>
            <td className="w-1/5">
                <QuantityCounter count={quantity} setCount={setQuantity} />
            </td>
            <td className="w-1/6">{(quantity * item.price).toFixed(2)}</td>
            <td className="p-5">
                <button onClick={() => handleRemoveCartItem()}>
                    <ZmdiDelete />
                </button>
            </td>
            <td>
                {item.quantity !== quantity ? (
                    <button
                        className=""
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => hadbleItemUpdate()}
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
            </td>
        </tr>
    );
};

export default CartItem;
