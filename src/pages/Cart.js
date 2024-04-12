import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cards/CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../config";

const handleCheckout = async (billed_amount, user) => {
    const {
        data: { order_id, currency, amount },
    } = await axios.post(`${REACT_APP_BACKEND_URL}/api/checkout`, {
        billed_amount,
    });
    var options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY,
        amount: amount,
        currency: currency,
        name: "Shinobi Styles",
        description: "The Best Clothing Site",
        image: "https://avatars.githubusercontent.com/u/76396335?v=4",
        order_id: order_id,
        callback_url: `${REACT_APP_BACKEND_URL}/api/paymentverification`,
        prefill: {
            name: user.user?.name || "No Name",
            email: user.user?.email,
            contact: user.user?.contact || "No Contact",
        },
        notes: {
            address: "Razorpay Corporate Office",
        },
        theme: {
            color: "#3399cc",
        },
    };
    var razor = new window.Razorpay(options);
    razor.open();
};
const Cart = () => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const cartitems = useSelector((store) => store.cart.items);
    const user = useSelector((store) => store.user);
    const OFFER = 5000;

    let subTotal = 0;
    useEffect(() => {
        cartitems?.forEach((item) => {
            subTotal += item.price * item.quantity;
        });
        setTotal(subTotal);
    }, [subTotal]);

    const handleCheckUserCheckoutEligibility = async () => {
        if (!user.user) {
            alert("Please Login to buy your Favorites");
            navigate("/my-account");
        } else if (!user.userShippingDetails) {
            alert("Please Fill Some Details...");
            navigate("/shippingDetails");
        } else {
            try {
                await handleCheckout(total, user);
            } catch (e) {
                console.log("cathing in error");
            } finally {
                navigate("/checkout");
            }
        }
    };

    return (
        <div className="mt-10 md:w-4/5 mx-auto flex md:flex-row flex-col gap-x-5">
            <div className="md:w-3/5">
                <table className="w-full">
                    <thead className="border-b-2 border-black">
                        <tr className="">
                            <th className="py-3 text-left" colSpan={2}>
                                Product
                            </th>
                            <th className="py-3 hidden md:table-cell">
                                Quantity
                            </th>
                            <th className="py-3 hidden md:table-cell">
                                SubTotal
                            </th>
                            <th className="py-3 hidden md:table-cell"></th>
                            <th className="py-3 hidden md:table-cell"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartitems?.map((item) => {
                            return <CartItem item={item} key={item._id} />;
                        })}
                    </tbody>
                </table>
            </div>
            <div
                className={`md:mt-0 mt-10 border md:w-2/5 ${
                    total !== 0 ? "block" : "hidden"
                } md:block`}
            >
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
                                className={`mt-3 ${
                                    Number(OFFER - total) <= 0 ? "hidden" : ""
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
                        <button
                            className="bg-[#5e3fde] py-3 w-full text-white hover:bg-[#ff24aa]"
                            onClick={() => handleCheckUserCheckoutEligibility()}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
