import React, { useState } from "react";
import { ZmdiDelete } from "../icons/Icons";
import QuantityCounter from "../buttons/QuantityCounter";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/redux/cartSlice";
import SaveChanges from "../buttons/saveChanges";

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();
    const handleRemoveCartItem = () => {
        dispatch(removeItem(item));
    };
    return (
        <>
            <tr className="text-center hidden lg:table-row">
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
                    <SaveChanges item={item} quantity={quantity} />
                </td>
            </tr>
            <tr className="lg:hidden table-row">
                <div className="flex justify-between w-full px-10">
                    <img src={item.image} className="w-48 p-3 object-cover" />
                    <div className="font-bold px-4 py-4">
                        <p className="text-gray-900">{item.title}</p>
                        <p className="text-gray-900">
                            RS. {item.price.toFixed(2)}
                        </p>
                        <div className="flex justify-between flex-wrap ">
                            <QuantityCounter
                                count={quantity}
                                setCount={setQuantity}
                            />
                            <button
                                onClick={() => handleRemoveCartItem()}
                                className="md:pt-0 pt-4"
                            >
                                <ZmdiDelete />
                            </button>
                        </div>
                        <div className="pt-5 float-right clear-both">
                            <SaveChanges item={item} quantity={quantity} />
                        </div>
                    </div>
                </div>
            </tr>
        </>
    );
};

export default CartItem;
