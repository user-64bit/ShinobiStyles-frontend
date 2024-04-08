import React from "react";
import paymentSuccessGif from "../../assets/payment_success.gif";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="true-center text-center">
                <img src={paymentSuccessGif} className="mx-auto w-[600px]" />
                <p className="pt-4 text-xl break-words text-green-600 font-bold">
                    We recieved your purchase request, we'll be in touch shortly
                </p>
                <Link to={"/"}>
                    <p className="text-[#5e3fde] underline hover:text-opacity-80">
                        Keep Shopping
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
