import React from "react";
import { BytesizeHeart, TdesignCartAdd } from "../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/redux/cartSlice";
import { addWishlist } from "../../utils/redux/WishlistSlice";
const Card = ({ data }) => {
    const dispatch = useDispatch();
    const handleOnClickCart = (data) => {
        dispatch(addItems(data));
    };
    const handleOnClickWishlist = (data) => {
        dispatch(addWishlist(data));
    };
    return (
        <>
            <div className="w-96 max-w-sm my-2 bg-white rounded-lg shadow cursor-pointer">
                <div className="relative overflow-hidden">
                    <div className="z-50 p-4 absolute top-0 right-0">
                        <BytesizeHeart
                            onClick={() => handleOnClickWishlist()}
                            className="text-2xl hover:bg-red-500"
                        />
                    </div>
                    <img
                        className="px-10 rounded-t-lg h-[300px] hover:scale-125 transition-all ease-in-out duration-300 mx-auto"
                        src={data?.image}
                        alt="product image"
                    />
                </div>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                            {data?.title}
                        </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {/* FIXME: Make Dynamic Rating with use of Stars */}
                        {/* <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div> */}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                            {data?.rating?.rate}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">
                            $ {data?.price}
                        </span>
                        <TdesignCartAdd
                            onClick={() => handleOnClickCart(data)}
                            className="hover:opacity-50"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
