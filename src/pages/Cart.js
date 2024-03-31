import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cards/CartItem";

const Cart = () => {
    const [total, setTotal] = useState(0);
    const cartitems = useSelector((store) => store.cart.items);
    const OFFER = 5000;

    let subTotal = 0;
    useEffect(() => {
        cartitems?.forEach((item) => {
            subTotal += item.price * item.quantity;
        });
        setTotal(subTotal);
    });

    return (
        <div className="mt-[14%] w-4/5 mx-auto flex gap-x-5">
            <div className="w-3/5">
                <table>
                    <thead className="border-b-2 border-black">
                        <tr className="">
                            <th className="py-3 text-left" colSpan={2}>
                                Product
                            </th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">SubTotal</th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartitems?.map((item) => {
                            return <CartItem item={item} key={item._id} />;
                        })}
                    </tbody>
                </table>
            </div>
            <div className="border w-2/5">
                <div className="p-8">
                    <div className="border-b-2 border-dotted pb-5">
                        <h1 className="uppercase font-extrabold mb-4">
                            Cart Totals
                        </h1>
                        <div className="flex justify-between">
                            <p>Subtotal:</p>
                            <p>₹ {total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="border-b-2 border-dotted py-5">
                        <div className="">
                            <p className="font-bold">Shipping</p>
                            <p>Shipping to: Rajsthan</p>
                            <button className="hover:text-[#ff24aa] my-2 text-[#5e3fde]">
                                Change Address
                            </button>
                        </div>
                    </div>
                    <div className="border-b-2 border-dotted py-5">
                        <div className="flex justify-between">
                            <h1 className="font-bold">Total</h1>
                            <h1 className="font-bold">₹ {total.toFixed(2)}</h1>
                        </div>
                        <div className="py-4">
                            <p>
                                or 3 monthly payments of ₹1499 with EMI OPtions
                            </p>
                            <p>
                                UPI & Cards Accepted, Online approval in 2
                                minutes
                            </p>
                            <p
                                className={`mt-3${
                                    OFFER - total <= 0 ? "hidden" : ""
                                }`}
                            >
                                Add ₹ {(OFFER - total)?.toFixed(2)} more and get
                                Flat <span className="font-bold">10% off</span>{" "}
                                . Use code{" "}
                                <span className="font-bold">"daijoubu10"</span>
                            </p>
                        </div>
                    </div>
                    <div className="py-5">
                        <button className="bg-[#5e3fde] py-3 w-full text-white hover:bg-[#ff24aa]">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
