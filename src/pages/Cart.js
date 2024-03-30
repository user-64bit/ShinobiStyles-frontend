import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ZmdiDelete } from "../components/icons/Icons";
import { removeItem } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleRemoveCartItem = (item) => {
        dispatch(removeItem(item));
    };
    return (
        <div className="mt-[14%] w-4/5 mx-auto flex justify-between gap-x-5">
            <table className="w-3/5">
                <thead className="border-b-2 border-black">
                    <tr className="">
                        <th className="py-3" colSpan={2}>
                            Product
                        </th>
                        <th className="py-3">Quantity</th>
                        <th className="py-3">SubTotal</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems?.map((item) => {
                        return (
                            <tr className="text-center">
                                <td className="w-3/5" colSpan={2}>
                                    <div className="flex items-center gap-x-10 w-full p-2">
                                        <img
                                            src={item.image}
                                            className="w-36 object-cover"
                                        />
                                        <div className="font-bold">
                                            <p className="text-gray-900">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-900">
                                                RS. {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/5">{item.quantity}</td>
                                <td className="w-1/6">{item.price}</td>
                                <td className="p-5">
                                    <button
                                        onClick={() =>
                                            handleRemoveCartItem(item)
                                        }
                                    >
                                        <ZmdiDelete />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="border w-2/5 text-center">
                <p>a lot of data</p>
                <p>a lot of data</p>
                <p>a lot of data</p>
                <p>a lot of data</p>
                <p>a lot of data</p>
                <p>a lot of data</p>
                <p>a lot of data</p>
            </div>
        </div>
    );
};

export default Cart;
