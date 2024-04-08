import React from "react";
import { ZmdiDelete } from "../components/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWish } from "../utils/redux/WishlistSlice";

const WishList = () => {
    const wishListItems = useSelector((store) => store.wishlist.items);
    const dispatch = useDispatch((store) => store.wishlist.items);
    const handleRemoveWishListItem = (item) => {
        dispatch(removeWish(item));
    };
    return (
        <div className="w-4/5 mx-auto mt-5">
            <table className="w-full">
                <thead className="border-b-2 border-black">
                    <tr className="">
                        <th className="py-3 text-left" colSpan={2}>
                            Product
                        </th>
                        <th className="py-3">Add To Cart</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {wishListItems?.map((item) => (
                        <tr className="">
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
                                        />
                                    </Link>
                                    <div className="font-bold">
                                        <Link
                                            to={
                                                "/products/" +
                                                item?.title.split(" ").join("-")
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
                                <Link
                                    to={
                                        "/products/" +
                                        item?.title.split(" ").join("-")
                                    }
                                    state={{ data: item }}
                                >
                                    <button className="w-44 border bg-[#5e3fde] py-3 text-white hover:bg-[#ff24aa] transition-all ease-in-out rounded-lg">
                                        Go for it
                                    </button>
                                </Link>
                            </td>
                            <td className="p-5 border text-center">
                                <button
                                    onClick={() =>
                                        handleRemoveWishListItem(item)
                                    }
                                >
                                    <ZmdiDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WishList;
