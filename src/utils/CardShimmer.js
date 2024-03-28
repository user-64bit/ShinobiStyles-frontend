import React from "react";
import { BytesizeHeart } from "../components/icons/Icons";
import { BACKUP_ARRAY } from "../config";

const CardShimmer = () => {
    return (
        <>
            <h1 className="py-20 text-center text-4xl font-bold">
                Loading....
            </h1>
            <div className="flex flex-wrap gap-1 w-[80%] mx-auto">
                {BACKUP_ARRAY.map((hash, idx) => {
                    return (
                        <div
                            className="w-60 max-w-sm rounded-lg shadow my-4 animate-pulse"
                            key={hash}
                        >
                            <div className="relative">
                                <div className="z-50 absolute top-2 right-2 rounded-full p-2">
                                    <BytesizeHeart className="text-xl" />
                                </div>
                                <div className="h-[350px] w-full mx-auto border-b dark:bg-gray-400"></div>
                            </div>
                            <div className="pt-4">
                                <h4 className="w-1/2 h-4 rounded-lg mx-auto dark:bg-gray-400"></h4>
                                <div className={`flex justify-center my-3`}>
                                    {Array(5)
                                        .fill("")
                                        .map((_, idx) => {
                                            return (
                                                <div
                                                    className="flex items-center space-x-1 rtl:space-x-reverse"
                                                    key={hash + idx}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 dark:text-gray-400`}
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            <div className={`text-center border-t py-2`}>
                                <span className="text-sm font-semibold text-gray-900">
                                    <h4 className="w-1/4 h-4 rounded-md mx-auto dark:bg-gray-400">
                                        ₹
                                    </h4>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CardShimmer;
