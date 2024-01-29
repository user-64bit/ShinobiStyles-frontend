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
            <div className="flex justify-center items-center">
                <div className="mx-4">
                    <img
                        src={data?.image}
                        className={`h-[350px] w-full mx-auto border-b ${
                            data?.image == null ? "invisible" : ""
                        }`}
                    ></img>
                </div>
                <div>
                    <li>{data?.title}</li>
                    <li>₹ {(data?.price).toFixed(2)}</li>
                </div>
                <Link to={"/checkout"}>
                    <BytesizeCart
                        className="mx-4 cursor-pointer"
                        onClick={() => handleCheckout(data?.price)}
                    />
                </Link>
            </div>
        </>
    );
};

export default Product;
