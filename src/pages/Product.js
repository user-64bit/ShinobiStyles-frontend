import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddToCart from "../components/buttons/AddToCart";
import QuantityCounter from "../components/buttons/QuantityCounter";
import SizeVariants from "../components/buttons/SizeVariants";
import WishListBtn from "../components/buttons/WishListBtn";

const Product = () => {
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");

    const { state } = useLocation();
    const data = state?.data;
    const ProductData = {
        _id: data?._id,
        title:
            selectedSize != ""
                ? `${data?.title}- ${selectedSize}`
                : data?.title,
        price: data?.price,
        description: data?.description,
        image: data?.image,
        quantity: count ? count : undefined,
        size: selectedSize,
    };

    return (
        <>
            <div className="flex md:flex-row flex-col md:true-center md:w-4/5 md:mx-auto p-4">
                <div className="md:mx-4 md:my-0 my-3 border md:w-1/2">
                    {/* FIXME:Carousel of multiple Images */}
                    <img
                        src={data?.image}
                        className={`h-[450px] border-b mx-auto ${
                            data?.image == null ? "hidden" : ""
                        }`}
                    />
                </div>
                <div className="border md:w-1/2 p-4 md:py-0 w-full">
                    <h1 className="text-3xl font-light">{data?.title}</h1>
                    <h1 className="text-2xl font-bold pt-5 text-[#5e3fde]">
                        ₹ {(data?.price).toFixed(2)}
                    </h1>
                    <p>or 3 monthly payments of ₹400 with EMI Options</p>
                    <p className="text-slate-400 text-sm">
                        UPI & Cards Accepted, Online approval in 2 minutes
                    </p>
                    <SizeVariants
                        sizes={data?.sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                    <h1 className="pt-5">In Stock</h1>
                    <div className="flex gap-x-2 pt-2">
                        <QuantityCounter setCount={setCount} count={count} />
                        <AddToCart
                            data={ProductData}
                            selectedSize={selectedSize}
                            count={count}
                        />
                    </div>
                    <div>
                        <WishListBtn data={data} />
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
