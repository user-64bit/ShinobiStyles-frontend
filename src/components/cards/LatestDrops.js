import React from "react";
import { BytesizeHeart } from "../icons/Icons";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../utils/redux/WishlistSlice";

const StarRating = (rating) => {
    let view = [];
    for (let i = 0; i < 5; i++) {
        let starClass = Math.round(rating) > i ? "text-[#ff3b60]" : "";
        view.push(
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                    className={`w-4 h-4 ${starClass}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            </div>
        );
    }
    return view;
};

const LatestDrops = ({ data }) => {
    const dispatch = useDispatch();
    const StarArray = StarRating(data?.rating?.rate);
    const handleOnClickWishlist = (data) => {
        dispatch(addWishlist(data));
    };
    return (
        <>
            <div className="w-60 max-w-sm my-2 bg-white border cursor-pointer">
                <div className="relative">
                    <div className="z-50 absolute top-2 right-2 bg-white rounded-full p-2">
                        <BytesizeHeart
                            onClick={() => handleOnClickWishlist()}
                            className="text-xl"
                        />
                    </div>
                    <img
                        className={`h-[350px] w-full mx-auto border-b ${
                            data?.image == null ? "invisible" : ""
                        }`}
                        src={data?.image}
                        alt="product image"
                    />
                </div>
                <div className="pt-4">
                    <h5
                        className={`text-lg text-ellipsis whitespace-nowrap overflow-hidden text-center tracking-tight text-gray-900 px-4 ${
                            data?.title == null ? "invisible" : ""
                        }`}
                    >
                        {data?.title}
                    </h5>
                    <div
                        className={`flex justify-center my-3 ${
                            StarArray == null ? "invisible" : ""
                        }`}
                    >
                        {StarArray.map((arr, i) => {
                            return arr;
                        })}
                    </div>
                </div>
                <div
                    className={`text-center border-t py-2 ${data?.price} == null ? "invisible": ""`}
                >
                    <span className="text-sm font-semibold text-gray-900">
                        ₹ {(data?.price).toFixed(2)}
                    </span>
                </div>
            </div>
        </>
    );
};

export default LatestDrops;
