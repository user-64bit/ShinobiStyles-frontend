import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GoForItBtn from "../components/buttons/GoForItBtn";
import RemoveWish from "../components/buttons/RemoveWish";

const WishList = () => {
    const wishListItems = useSelector((store) => store.wishlist.items);
    return (
        <div className="w-4/5 mx-auto mt-5">
            <table className="w-full">
                <thead className="border-b-2 border-black">
                    <tr className="">
                        <th className="py-3 text-left" colSpan={2}>
                            Product
                        </th>
                        <th className="py-3 hidden md:table-cell">
                            Add To Cart
                        </th>
                        <th className="py-3 hidden md:table-cell"></th>
                    </tr>
                </thead>
                <tbody>
                    {wishListItems?.map((item) => (
                        <>
                            <tr className="hidden md:table-row">
                                <td className="w-3/5 border" colSpan={2}>
                                    <div className="flex items-center gap-x-10 w-full p-2">
                                        <Link
                                            to={
                                                "/products/" +
                                                item?.title.split(" ").join("-")
                                            }
                                            state={{ data: item }}
                                        >
                                            <img
                                                src={item?.image}
                                                className="w-36 object-cover hover:opacity-80"
                                                alt="404 not found"
                                            />
                                        </Link>
                                        <div className="font-bold">
                                            <Link
                                                to={
                                                    "/products/" +
                                                    item?.title
                                                        .split(" ")
                                                        .join("-")
                                                }
                                                state={{ data: item }}
                                            >
                                                <p className="text-gray-900 hover:text-[#5e3fde]">
                                                    {item?.title}
                                                </p>
                                            </Link>
                                            <p className="text-gray-900">
                                                RS. {item?.price?.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="border text-center">
                                    <GoForItBtn item={item} />
                                </td>
                                <td className="p-5 border text-center">
                                    <RemoveWish item={item} />
                                </td>
                            </tr>

                            <tr className="table-row md:hidden">
                                <td className="w-3/5 border">
                                    <div className="flex justify-between">
                                        <div>
                                            <Link
                                                to={
                                                    "/products/" +
                                                    item?.title
                                                        .split(" ")
                                                        .join("-")
                                                }
                                                state={{ data: item }}
                                            >
                                                <img
                                                    src={item?.image}
                                                    className="md:p-0 p-4 w-36 object-cover hover:opacity-80"
                                                    alt="404 not found"
                                                />
                                            </Link>
                                        </div>
                                        <div className="font-bold px-3 py-4">
                                            <Link
                                                to={
                                                    "/products/" +
                                                    item?.title
                                                        .split(" ")
                                                        .join("-")
                                                }
                                                state={{ data: item }}
                                            >
                                                <p className="text-gray-900 hover:text-[#5e3fde]">
                                                    {item?.title}
                                                </p>
                                            </Link>
                                            <p className="text-gray-900">
                                                RS. {item?.price?.toFixed(2)}
                                            </p>
                                            <div className="flex justify-between pt-3">
                                                <GoForItBtn item={item} />
                                                <RemoveWish item={item} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WishList;
