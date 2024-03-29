import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BytesizeCart } from "../components/icons/Icons";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Product = () => {
    const { state } = useLocation();
    const data = state?.data;
    const handleCheckout = async (amount) => {
        const { data } = await axios.get(`${BACKEND_URL}/api/getkey`);
        const {
            data: { order },
        } = await axios.post(`${BACKEND_URL}/api/checkout`, {
            amount,
        });
        var options = {
            key: data.key,
            amount: order.amount,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/76396335?v=4",
            order_id: order.id,
            callback_url: `${BACKEND_URL}/api/paymentverification`,
            prefill: {
                // FIXME: this data will be auto generated from user data (allmost everything in options)
                name: "Arth Prajapati",
                email: "arth.prajapati@example.com",
                contact: "9000090000",
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
    return (
        <>
            <div className="flex pt-[12%] w-4/5 mx-auto">
                <div className="mx-4 border w-1/2">
                    <img
                        src={data?.image}
                        className={`h-[350px] border-b ${
                            data?.image == null ? "hidden" : ""
                        }`}
                    ></img>
                </div>
                <div className="border w-1/2 px-4">
                    <h1 className="text-3xl font-light">{data?.title}</h1>
                    <h1 className="text-2xl font-bold pt-5 text-[#5e3fde]">
                        ₹ {(data?.price).toFixed(2)}
                    </h1>
                    <p>or 3 monthly payments of ₹400 with EMI Options</p>
                    <p className="text-slate-400 text-sm">
                        UPI & Cards Accepted, Online approval in 2 minutes
                    </p>
                    <h1>In Stock</h1>
                    <div>
                        <button>Add to cart</button>
                    </div>
                </div>

                {/* will move this whole functionality to Checkout page which will be linked in Cart section */}
                {/* <Link to={"/checkout"}>
                    <BytesizeCart
                        className="mx-4 cursor-pointer"
                        onClick={() => handleCheckout(data?.price)}
                    />
                </Link> */}
            </div>
        </>
    );
};

export default Product;
